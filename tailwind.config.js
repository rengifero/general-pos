const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { default: themes } = require('daisyui/theme/object');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui")
  ],
  daisyui:{

    themes: ["synthwave"],
  }
};
