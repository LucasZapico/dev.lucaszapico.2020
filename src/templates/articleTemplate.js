import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import { IoIosArrowRoundForward } from 'react-icons/io'

// import '../css/blog-post.css';

export default function Template({ data, path, pageContext }) {
  console.log(pageContext)
  const prev = pageContext.previous
  const next = pageContext.next
  const { markdownRemark } = data
  // const path = data.fields.path
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <div className="page articles content--container">
        <div className="articles page">
          <div className="article measure__default">
            <h1>{frontmatter.title}</h1>
            <div className="body">{frontmatter.date_created}</div>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </div>
        <div className="project__more">
          <div className="">
            {next !== null ? (
              <Link
                to={next.fields.path}
                className="icon__arrow AniLink__primary--dark"
              >
                {next.frontmatter.title} <IoIosArrowRoundForward />
              </Link>
            ) : undefined}
          </div>
          <div className="">
            {prev !== null ? (
              <Link
                swipe
                direction="left"
                to={prev.fields.path}
                className="icon__arrow AniLink__primary--dark"
              >
                {prev.frontmatter.title} <IoIosArrowRoundForward />
              </Link>
            ) : undefined}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(fields: { path: { eq: $path } }) {
      html
      fields {
        path
      }
      frontmatter {
        categories
        title
        tags
        date_created
      }
    }
  }
`
