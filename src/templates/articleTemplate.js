import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'

import {
  IoIosHome,
  IoIosArrowRoundForward,
  IoIosArrowRoundBack,
} from 'react-icons/io'

// import '../css/blog-post.css';

export default function Template({
  data,
  path,
  pageContext,
  location,
}) {
  console.log('location', location)
  const prev = pageContext.previous
  const next = pageContext.next
  const { markdownRemark } = data
  // const path = data.fields.path
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <div className="page articles content--container">
        <div className="articles page">
          <article className="article measure__default margin__y--l">
            <h1>{frontmatter.title}</h1>
            <div className="body">{frontmatter.date_created}</div>
            <div className="margin__top--m breadcrumb">
              <Link to="/">Home /</Link>
              <Link to="/articles"> Articles / </Link>
              <Link to={path}> {frontmatter.title}</Link>
            </div>
            <div className="margin__top--m">
              <div className="">Categories</div>
              <div className="container categories ">
                {frontmatter.categories.map((c, i) => (
                  <div
                    key={i + c.replace(' ', '-')}
                    className="category body"
                  >
                    {c},
                  </div>
                ))}
              </div>
            </div>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
            <div className="article__more margin__top--m">
              <div className="">
                {prev !== null ? (
                  <Link
                    swipe
                    direction="left"
                    to={prev.fields.path}
                    className="icon__arrow AniLink__primary--dark"
                  >
                    <IoIosArrowRoundBack /> {prev.frontmatter.title}{' '}
                  </Link>
                ) : undefined}
              </div>
              <div className="">
                {next !== null ? (
                  <Link
                    to={next.fields.path}
                    className="icon__arrow AniLink__primary--dark"
                  >
                    {next.frontmatter.title}{' '}
                    <IoIosArrowRoundForward />
                  </Link>
                ) : undefined}
              </div>
            </div>
          </article>
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
