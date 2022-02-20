require(`dotenv`).config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.theblondingroom.ca`,
    author: 'Sean Campbell <sean.campbell13@gmail.com>',
    title: 'The Blonding Room',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        resolveEnv: () => process.env.GATSBY_ENV,
        env: {
          development: {
            policy: [{ userAgent: `*`, disallow: [`/`] }],
          },
          production: {
            policy: [{ userAgent: `*`, allow: `/` }],
          },
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
        name: 'The Blonding Room',
        short_name: 'Blonding Room',
        start_url: '/',
        background_color: '#795e00',
        theme_color: '#795e00',
        display: 'minimal-ui',
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    `gatsby-transformer-yaml`,
    // `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        /**
         * @property {boolean} [resetCSS=true]
         * if false, this plugin will not use `<CSSReset />
         */
        resetCSS: true,
        /**
         * @property {boolean} [isUsingColorMode=true]
         * if false, this plugin will not use <ColorModeProvider />
         */
        isUsingColorMode: true,
      },
    },
  ],
}
