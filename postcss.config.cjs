const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
    plugins: [
        require('autoprefixer'),
        purgecss({
          content: ['./src/**/*.{js,ts,jsx,tsx,html}'],
          defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
          safelist: [] // Add any classes here that should not be purged
        }),
    ],
}