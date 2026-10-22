import sharp from "sharp";

const source = "public/profile.jpg";
const output = "public/portrait.png";

const { data, info } = await sharp(source).raw().toBuffer({ resolveWithObject: true });
const { width, height, channels } = info;
const count = width * height;
const background = new Uint8Array(count);

const neutral = (r, g, b, maxSpread) => Math.max(r, g, b) - Math.min(r, g, b) <= maxSpread;

// Studio backdrop is a neutral gray. Hair is darker, and the navy suit is bluer.
const isClearBackdrop = (r, g, b) => {
  const max = Math.max(r, g, b);
  return max >= 12 && max <= 48 && neutral(r, g, b, 10);
};

for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const i = y * width + x;
    const o = i * channels;
    if (isClearBackdrop(data[o], data[o + 1], data[o + 2])) background[i] = 1;
  }
}

const seen = new Uint8Array(count);
const queue = new Int32Array(count);
let head = 0;
let tail = 0;
const push = (index) => {
  if (seen[index] || !background[index]) return;
  seen[index] = 1;
  queue[tail++] = index;
};

for (let x = 0; x < width; x++) {
  push(x);
  push((height - 1) * width + x);
}
for (let y = 0; y < height; y++) {
  push(y * width);
  push(y * width + width - 1);
}

while (head < tail) {
  const index = queue[head++];
  const x = index % width;
  const y = (index - x) / width;
  if (x > 0) push(index - 1);
  if (x < width - 1) push(index + 1);
  if (y > 0) push(index - width);
  if (y < height - 1) push(index + width);
}

// Peel darker backdrop around the removed gray, stopping before the black hair.
const fringeDepth = new Int16Array(count);
fringeDepth.fill(-1);
const fringeQueue = new Int32Array(count);
let fringeHead = 0;
let fringeTail = 0;
for (let i = 0; i < count; i++) {
  if (!seen[i]) continue;
  fringeQueue[fringeTail++] = i;
  fringeDepth[i] = 0;
}
while (fringeHead < fringeTail) {
  const index = fringeQueue[fringeHead++];
  if (fringeDepth[index] >= 16) continue;
  const x = index % width;
  const y = (index - x) / width;
  const consider = (neighbor) => {
    if (fringeDepth[neighbor] !== -1) return;
    const o = neighbor * channels;
    const max = Math.max(data[o], data[o + 1], data[o + 2]);
    if (max >= 6 && max < 12 && neutral(data[o], data[o + 1], data[o + 2], 10)) {
      seen[neighbor] = 1;
      fringeDepth[neighbor] = fringeDepth[index] + 1;
      fringeQueue[fringeTail++] = neighbor;
    }
  };
  if (x > 0) consider(index - 1);
  if (x < width - 1) consider(index + 1);
  if (y > 0) consider(index - width);
  if (y < height - 1) consider(index + width);
}

const feather = 10;
const distance = new Int16Array(count);
distance.fill(999);
const distanceQueue = new Int32Array(count);
head = 0;
tail = 0;
for (let i = 0; i < count; i++) {
  if (!seen[i]) {
    distance[i] = 0;
    distanceQueue[tail++] = i;
  }
}
while (head < tail) {
  const index = distanceQueue[head++];
  const next = distance[index] + 1;
  if (next > feather) continue;
  const x = index % width;
  const y = (index - x) / width;
  const step = (neighbor) => {
    if (distance[neighbor] <= next) return;
    distance[neighbor] = next;
    distanceQueue[tail++] = neighbor;
  };
  if (x > 0) step(index - 1);
  if (x < width - 1) step(index + 1);
  if (y > 0) step(index - width);
  if (y < height - 1) step(index + width);
}

const rgba = Buffer.alloc(count * 4);
for (let i = 0; i < count; i++) {
  const o = i * channels;
  const out = i * 4;
  rgba[out] = data[o];
  rgba[out + 1] = data[o + 1];
  rgba[out + 2] = data[o + 2];
  const max = Math.max(data[o], data[o + 1], data[o + 2]);
  const x = i % width;
  if (!seen[i] && x !== 0) {
    rgba[out + 3] = 255;
  } else if (x === 0 || max > 40 || distance[i] > feather) {
    rgba[out + 3] = 0;
  } else {
    rgba[out + 3] = Math.round(70 * (1 - distance[i] / feather));
  }

  // Bake the fade onto the page color. A transparent edge resizes into a white line.
  const page = 10;
  const alpha = rgba[out + 3] / 255;
  rgba[out] = Math.round(rgba[out] * alpha + page * (1 - alpha));
  rgba[out + 1] = Math.round(rgba[out + 1] * alpha + page * (1 - alpha));
  rgba[out + 2] = Math.round(rgba[out + 2] * alpha + page * (1 - alpha));
  rgba[out + 3] = 255;
}

await sharp(rgba, { raw: { width, height, channels: 4 } })
  .png()
  .toFile(output);

const sample = (x, y) => rgba[(y * width + x) * 4 + 3];
console.log(
  "suit",
  sample(80, 370),
  "shirt",
  sample(200, 390),
  "backdrop",
  sample(30, 30),
  "hair",
  sample(160, 50),
  "shoulder",
  sample(300, 360),
);
