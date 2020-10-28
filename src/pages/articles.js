import React from 'react'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import { Link, graphql } from 'gatsby'
import { IoIosArrowRoundForward } from 'react-icons/io'
import SEO from '../components/seo'

const Post = ({ post, progress }) => {
  console.log('test', post.frontmatter.title)
  console.log('test', post.frontmatter.featured)
  return (
    <div className={`post card article`}>
      <Link to={post.fields.path}>
        <div className="post__content">
          <div className="post__header">
            <h4 className="post__title">{post.frontmatter.title}</h4>
          </div>
          <div className="post__body">
            <h6 className="body__large post__description">
              {post.frontmatter.description}
            </h6>
            <div className="post__filters">
              <div>
                <div className="">Categoies</div>
                <div className="post__categories">
                  {post.frontmatter.categories.map((c, i) => (
                    <div
                      key={i + c.replace(' ', '-')}
                      className="post__category body"
                    >
                      {c},
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="">Tags</div>
                <div className="post__tags">
                  {post.frontmatter.tags.map((t, i) => (
                    <div
                      key={i + t.replace(' ', '-')}
                      className="post__tag body"
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
    </div>
  )
}

const HomePage = ({ data }) => {
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
        <div className="content articels">
          <section className="section">
            <div className="header">
              <div className="">
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

export default HomePage

export const pageQuery = graphql`
  query {
    articles: allMarkdownRemark(
      limit: 1000
      filter: { frontmatter: { isdraft: { eq: false } } }
      sort: { order: DESC, fields: [frontmatter___date_created] }
    ) {
      edges {
        node {
          id
          html
          fields {
            path
          }
          frontmatter {
            title
            description
            tags
            categories
            date_created
          }
        }
      }
    }
  }
`
