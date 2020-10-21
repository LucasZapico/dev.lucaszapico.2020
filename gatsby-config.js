/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Site Title",
    titleTemplate: "%s · dev.lucaszapico.space",
    description: "Amazing Site Description",
    author: "@dev.lucaszapico.space",
    url: "http://devlucaszapico.netlify.app",
    image: "/opengraph-gen.png",
    twitterUsername: "@devlucas"
  },
  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        // trackingId: "UA-111111-7",
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp", 
    "gatsby-plugin-react-helmet",
    `gatsby-transformer-remark`,
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-favicon",
      options: {
        logo: "./src/assets/images/favicon.png",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
        plugins: [`gatsby-transformer-json`],
      },
    },
  ],
}
