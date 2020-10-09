import React from "react"
import { Link, graphql } from "gatsby"

import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const MethodPage = () => (
  <Layout>
    <SEO title="Method" />
    <h1>Method</h1>
    <p>WIP</p>
  </Layout>
)

export default MethodPage

export const pageQuery = graphql`
  query {
    allMdx {
      edges {
        node {
          frontmatter {
            categories
            tags
          }
        }
      }
    }
  }
`
