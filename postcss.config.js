import autoprefixer from 'autoprefixer';
import purgecssModule from '@fullhuman/postcss-purgecss';

const purgecss = purgecssModule.default;

export default {
  plugins: [
    autoprefixer,
    purgecss({
      content: ['./src/**/*.{js,ts,jsx,tsx,html}'],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
      safelist: [] // Add any classes here that should not be purged
    }),
  ],
};