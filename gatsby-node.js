const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = async ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    const path = `/article${value}`
    await createNodeField({
      node: node,
      name: `path`,
      value: path,
    })
  }
}

// create pages from json
exports.createPages = async ({
  actions: { createPage },
  reporter,
  graphql,
}) => {}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const PostTemplate = path.resolve(
    `src/templates/articleTemplate.js`
  )
  const ProjectTemplate = path.resolve(
    `src/templates/projectTemplate.js`
  )

  const projectRes = await graphql(`
    {
      allProjectsJson {
        edges {
          node {
            audio
            link
            repo
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
              images {
                imgOne {
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

  const projects = projectRes.data.allProjectsJson.edges

  projects.forEach((project, index) => {
    let slug = project.node.title
    slug = slug.replace(/[^a-z0-9+]+/gi, '-').toLowerCase()
    createPage({
      path: `/projects/${slug}/`,
      component: require.resolve(
        './src/templates/projectTemplate.js'
      ),
      context: { project },
    })
  })

  const articleRes = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: frontmatter___date_created }
        filter: { frontmatter: { isdraft: { eq: false } } }
      ) {
        edges {
          node {
            fields {
              path
            }
            tableOfContents
            html
            id
            frontmatter {
              title
              date_created
              categories
              tags
              isdraft
              description
            }
          }
          next {
            fields {
              path
            }
            frontmatter {
              title
              isdraft
            }
          }
          previous {
            frontmatter {
              title
              isdraft
            }
            fields {
              path
            }
          }
        }
      }
    }
  `)

  const posts = articleRes.data.allMarkdownRemark.edges

  posts.forEach((edge, index) => {
    createPage({
      path: edge.node.fields.path,
      component: PostTemplate,
      context: { next: edge.next, previous: edge.previous }, // additional data can be passed via context
    })
  })
}
