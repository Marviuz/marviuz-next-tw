const path = require('path');

const lint = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

const format = 'prettier --write';

module.exports = {
  '*.{cjs,mjs,js,jsx,ts,tsx,json}': [format, lint],
};
