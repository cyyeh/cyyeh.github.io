module.exports = {
  siteMetadata: {
    title: `Learning in Public`,
    author: {
      name: `cyyeh`,
      summary: `, an ordinary mind who is always passionately learning from extraordinary minds.`,
    },
    description: `An ordinary mind who is always passionately learning from extraordinary minds.`,
    siteUrl: `https://cyyeh.netlify.app/`,
    social: {
      linktree: `cyyeh`,
    },
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          {
            resolve: `gatsby-remark-external-links`,
            options: {
              target: `_blank`,
              rel: `nofollow noopener noreferrer`
            }
          }
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `ADD YOUR TRACKING ID HERE`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return (
                allMarkdownRemark.nodes
                  .filter(node => !node.frontmatter.draft)
                  .map(node => {
                    return Object.assign({}, node.frontmatter, {
                      description: node.excerpt,
                      date: node.frontmatter.date,
                      url: site.siteMetadata.siteUrl + node.fields.slug,
                      guid: site.siteMetadata.siteUrl + node.fields.slug,
                      custom_elements: [{ "content:encoded": node.html }],
                    })
                  })
              )
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  nodes {
                    excerpt
                    html
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                      draft
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Learning in Public RSS Feed, by cyyeh",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Learning in Public`,
        short_name: `Blog`,
        start_url: `/`,
        background_color: `#ffffff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `learning-in-public`
      }
    },
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-netlify-cms`
  ],
}
