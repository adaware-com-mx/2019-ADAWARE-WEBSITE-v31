module.exports = {
  siteMetadata: {
    title: `ADAWARE, tus deseos son software`,
    description: `Vamos a recomendarte software administrativo profesional. Deja de perder tiempo y comienza a alcanzar tus objetivos con soluciones contables de confianza.`,
    author: `@edbarrios`,
  },
  pathPrefix: `/2019`,
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        minify: false, // Breaks styles if not set to false
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `common`,
        path: `../common/src/assets/`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `../common/src/data/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `UA-102311-63`,
        // Puts tracking script in the head instead of the body
        head: false,
        // enable ip anonymization
        anonymize: true,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: [
            'Poppins:300,400,500,600,700',
            'Nanum Gothic:400,500,600,700,800',
            'DM Sans:100,300,400,400i,500,500i,600,700,700i',
            'B612:400,400i,700,700i',
            'Heebo:300,400,500,600,700,800',
            'Raleway:500,600',
            'Open Sans:300,400,600,700,800',
            'Lato:300,400,700',
            'Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i',
            'Gothic A1:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i',
          ],
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
