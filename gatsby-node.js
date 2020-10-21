const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)



// create pages from json
exports.createPages = async ({
    actions: { createPage },
    reporter,
    graphql,
  }) => {
    const result = await graphql(`
      {
        allProjectsJson {
          edges {
            node {
              audio
              categories
              data_created
              featured {
                src {
                  childImageSharp {
                    fluid {
                        base64
                        aspectRatio
                        src
                        srcSet
                        sizes
                    }
                  }
                }
              }
              content {
                main {
                  challenge
                  deliverables
                  features
                  objective
                  overview
                  result
                  solution
                  takeaways
                }
                summary {
                  challenge
                  outcome
                  deliverables
                }
              }
              tags
              technology_stack
              title
              subheader
              isComingSoon
              isdraft
              last_modified
            }
            next {
              title
              path
            }
            previous {
              title
              path
            }
          }
        }
      }
    `)
  
    const projects = result.data.allProjectsJson.edges
  
    projects.forEach((project, index) => {
      let slug = project.node.title
      slug = slug.replace(/[^a-z0-9+]+/gi, "-").toLowerCase()
      createPage({
        path: `/projects/${slug}/`,
        component: require.resolve("./src/templates/projectTemplate.js"),
        context: { project },
      })
    })
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


// exports.createPages = async ({ actions, graphql, reporter }) => {
//   const { createPage } = actions

//   const Template = path.resolve(`src/templates/articleTemplate.js`)

//   const result = await graphql(`
//     {
//       allMarkdownRemark(
//         filter: { frontmatter: { isdraft: { eq: false } } }
//         sort: { order: DESC, fields: [frontmatter___date_created] }
//         limit: 1000
//       ) {
//         edges {
//             node {
//               id
//               frontmatter {
//                 categories
//                 path
//                 title
//                 tags
//                 subheader
//                 isdraft
//               }
//               html
//               headings {
//                 depth
//                 value
//               }
//             }
//             previous {
//               frontmatter {
//                 title
//                 path
//               }
//             }
//             next {
//               frontmatter {
//                 path
//                 title
//               }
//             }
//           }
//       }
//     }
//   `)

//   // Handle errors
//   if (result.errors) {
//     reporter.panicOnBuild(`Error while running GraphQL query.`)
//     return
//   }
//   const posts = result.data.allMarkdownRemark.edges

//   posts.forEach(({ node }, index) => {
//     createPage({
//       path: node.frontmatter.path,
//       component: Template,
//       context: {

//       }, // additional data can be passed via context
//     })
//   })
// }
