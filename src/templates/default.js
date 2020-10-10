import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Layout from '../components/project-layout'

// import '../css/blog-post.css';

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
      <Layout>
    <div className="">
      <Helmet title={`${frontmatter.title}`} />
      <div className="">
        <div
          className=""
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($path: String!) {
    markdownRemark(
     
      frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        categories
        path
        title
        tags
        subheader
      }
    }
  }
`