import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../src/components/layout"
import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"

function CasesIndex({ data }) {
  const { edges } = data.caseIndex
  console.log(edges)
  return (
    <Layout>
      <h1>All Cases</h1>
      {/* {edges.map(({ node }) => {
        const { title, path } = node.frontmatter
        return (
          <div key={node.id}>
            <header>
              <div>{title}</div>
            </header>

            <AniLink to={path}>View Article</AnLink>
            <hr />
          </div>
        )
      })} */}
    </Layout>
  )
}

export default CasesIndex

export const pageQuery = graphql`
  query {
    caseIndex: allMdx(
      filter: {
        frontmatter: { categories: { eq: "case" }, isdraft: { eq: false } }
      }
      sort: { fields: frontmatter___date_created, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            path
            title
          }
          id
        }
      }
    }
  }
`
