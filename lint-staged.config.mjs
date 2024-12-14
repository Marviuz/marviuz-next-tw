import path from 'path';

const lint = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

const format = 'prettier --write';

export default {
  '*.{cjs,mjs,js,jsx,ts,tsx}': [format, lint],
  '*.json': [format],
};
