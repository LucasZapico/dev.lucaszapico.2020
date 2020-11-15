import React from 'react'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import { Link, graphql } from 'gatsby'
import { IoIosArrowRoundForward } from 'react-icons/io'
import SEO from '../components/seo'

const Post = ({ post, progress }) => {
  return (
    <article className={`post card article`}>
      <Link to={post.fields.path}>
        <div className="post__content">
          <header className="post__header">
            <h4 className="post__title">{post.frontmatter.title}</h4>
            <div className="post__date">
              {post.frontmatter.date_created}
            </div>
          </header>
          <div className="post__body">
            <h6 className="body__large post__description">
              {post.frontmatter.description}
            </h6>
            <div className="post__filters">
              <div className="margin__top">
                <div className="">Categories</div>
                <div className=" container categories ">
                  {post.frontmatter.categories.map((c, i) => (
                    <div
                      key={i + c.replace(' ', '-').replace(',', '')}
                      className="category body"
                    >
                      {c},
                    </div>
                  ))}
                </div>
              </div>
              <div className="margin__top">
                <div className="">Tags</div>
                <div className="container tags ">
                  {post.frontmatter.tags.map((t, i) => (
                    <div
                      key={i + t.replace(' ', '-').replace(',', '')}
                      className="tag body"
                    >
                      {t},
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </article>
  )
}

const ArticlesPage = ({ data, location }) => {
  const edges = data.articles.edges
  // function getCategories() {
  //   let allCategories = []
  //   quotes.forEach(element => {
  //     allCategories = union(allCategories, element.categories)
  //   })
  //   return allCategories
  // }

  return (
    <Layout>
      <SEO title="articles" />
      <div className="container articles page">
        <header className="articles header"></header>
        <div className="content articles">
          <section className="section">
            <div className="header">
              <div className="header__title">
                <h2 className="h1 margin__left--m">Articles</h2>
              </div>
            </div>
            <div className="articles__container">
              {edges.map(edge => (
                <Post key={edge.node.id} post={edge.node} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </Layout>
  )
}

export default ArticlesPage

export const pageQuery = graphql`
  query {
    articles: allMarkdownRemark(
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
`
