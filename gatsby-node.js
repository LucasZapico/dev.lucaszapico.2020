/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
//  */

// open graph plugin not working -- probably an mdx issue

// const { createOpenGraphImage } = require("gatsby-plugin-open-graph-images")
// const path = require("path")

// exports.createPages = async ({ actions }) => {
//   const { createPage } = actions

//   const openGraphImage = createOpenGraphImage(createPage, {
//     path: "/og-image/index.png", // (1)
//     component: path.resolve(`src/templates/index.og-image.js`), // (2)
//     size: {
//       width: 400,
//       height: 50,
//     }, // (3)
//     context: {
//       description: "a image created with gatsby-plugin-open-graph-images",
//     },
//   })
// }

// You can delete this file if you're not using it

// const { createFilePath } = require("gatsby-source-filesystem")

// exports.onCreateNode = async ({ node, actions, getNode }) => {
//   const { createNodeField } = actions
//   // Handle errors

//   if (node.internal.type === "Mdx") {
//     const value = createFilePath({ node, getNode })
//     createNodeField({
//       // Individual MDX node
//       node,
//       // Name of the field you are adding
//       name: "slug",
//       // Generated value based on filepath with "blog" prefix
//       value: `/cases${value}`,
//     })
//     createNodeField({
//       // Individual MDX node
//       node,
//       // Name of the field you are adding
//       name: "test",
//       // Generated value based on filepath with "blog" prefix
//       value: `I am a test`,
//     })
//   }
// }

// exports.createPages = async ({ graphql, actions, reporter }) => {
//   // Destructure the createPage function from the actions object
//   const { createPage } = actions
//   const result = await graphql(`
//     query {
//       allMdx {
//         edges {
//           node {
//             id
//             fields {
//               slug
//             }
//             frontmatter {
//               title
//               path
//             }
//           }
//           next {
//             id
//             frontmatter {
//               title
//               path
//             }
//           }
//           previous {
//             id
//             frontmatter {
//               title
//               path
//             }
//           }
//         }
//       }
//     }
//   `)
//   if (result.errors) {
//     reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
//   }
//   // Create blog post pages.

//   // you'll call `createPage` for each result
//   console.log("path", " path")
//   result.data.allMdx.edges.forEach((edge, index) => {
//     // console.log(edge)
//     // const postPath = edge.node.frontmatter.path
//     const next = edge.next ? edge.next.frontmatter.path : "undefined"
//     const previous = edge.previous
//       ? edge.previous.frontmatter.path
//       : "undefined"

//     console.log("prev", previous)
//     console.log("next", next)

//     // console.log(path)
//     createPage({
//       // This is the slug you created before
//       // (or `node.frontmatter.slug`)
//       // path: edge.node.frontmatter.path.replace('"', "`"),
//       path: edge.node.fields.slug,
//       component: path.resolve(`./src/components/cases-layout.js`),
//       // You can use the values in this context in
//       // our page layout component
//       context: {
//         id: edge.node.id,
//         next: next,
//         previous: previous,
//         test: "test",
//       },
//     })
//   })
// }
