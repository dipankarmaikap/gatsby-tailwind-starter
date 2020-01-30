module.exports = {
  siteMetadata: {
    title: `Gatsby Tailwind Starter`,
    description: `Simple Gatsby Starter With Tailwind CSS`,
    author: `@dipankar_maikap`
  },
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true, // Enable tailwindcss support
        purgeOnly: [`src/css/global.css`] // Purge only these files/folders
        // develop: true // Enable while using `gatsby develop`
        //printRejected: true, // Print removed selectors and processed file names
        // whitelist: ['whitelist'], // Don't remove this selector
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
      }
    }
  ]
};
