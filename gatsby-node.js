/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `path`,
      node,
      value,
    })
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const Template = path.resolve(`src/templates/default.js`)

  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { isdraft: { eq: false } } }
        sort: { order: DESC, fields: [frontmatter___date_created] }
        limit: 1000
      ) {
        edges {
            node {
              id
              frontmatter {
                categories
                path
                title
                tags
                subheader
                isdraft
              }
              html
              headings {
                depth
                value
              }
            }
            previous {
              frontmatter {
                title
                path
              }
            }
            next {
              frontmatter {
                path
                title
              }
            }
          }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  const posts = result.data.allMarkdownRemark.edges

  posts.forEach(({ node }, index) => {
    createPage({
      path: node.frontmatter.path,
      component: Template,
      context: {

      }, // additional data can be passed via context
    })
  })
}
