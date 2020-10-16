import React, { useState, useRef } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Link from "gatsby-plugin-transition-link/AniLink"
import { IoIosArrowRoundForward } from "react-icons/io"



const ProjectSection = ({ projectData, progress }) => (
  <div className="project">
    <div className="content__container">
      <div
        className="project__header char-100"
        data-sal="slide-right"
        data-sal-delay="100"
        data-sal-easing="ease"
      >
        <h3 className="project__title">{projectData.title}</h3>

        <h6 className="char-100 project__subheader">
          {projectData.subheader}
          {progress}
        </h6>
        <div className="project__tags ">
          {projectData.tags.map((t, i) => (
            <div key={i} className="project__tag body__default">
              {t},
            </div>
          ))}
        </div>
      </div>

      <div
        className="project__shower"
        data-sal="slide-right"
        data-sal-delay="100"
        data-sal-easing="ease"
      >
        <div className="project__img">
          
        <Img fluid={projectData.featured.src.childImageSharp.fluid} objectFit="contain" />
        </div>
      </div>

      <Link
        swipe
        top="exit"
        to={projectData.path}
        className="icon__arrow link__primary--dark"
      >
        More On The project{""} <IoIosArrowRoundForward />
      </Link>
    </div>
  </div>
)

const IndexPage = ({ data }) => {
  const edges = data.recentProjects.edges
  console.log(edges)
  const lineContainer = useRef(null)
  const [currentYPos, setCurrentYPos] = useState(0)

  const [plSt, setPlSt] = useState("show")
  // hero verb changer
  
  return (
    <Layout>
      <SEO title="Home" />
      <div className="page home">
        <div className="hero__container">
          {/* <Img
            className="hero__image"
            fluid={data.heroImg.childImageSharp.fluid}
            objectFit="contain"
          /> */}
          <div className="hero">
            <div className="hero__content content__container margin__left--m">
              <h2 className="">Frontend Developer who&nbsp;Designs</h2>

              {/* <div>
                <Link swipe top="exit" to="/method" className="link__primary--light icon__arrow">
                  Method <IoIosArrowRoundForward />
                </Link>
              </div> */}
              {/* <div className="hero-img__container">
                <div className="hero__img" ref={lineContainer}>
                  <Angle />
                </div>
              </div> */}
            </div>
          </div>
        </div>{" "}
        <section>{/* todo: add table of contents  */}</section>
        <section className="section">
          <div className="content__container"></div>
        </section>
        <section className="section projects">
          <div className="projects__header">
            <div className="content__container">
              <h2 className="h1 margin__left--m">projects</h2>
              <h5 className="subheader">
                {/* We specialize in sustainable digital engagement solutions */}
              </h5>
            </div>
          </div>
          <div className="projects__container">
            {edges.map(edge => (
              <ProjectSection key={edge.node.id} projectData={edge.node} />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    heroImg: file(relativePath: { eq: "cloud-wallpaper-v1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    recentProjects: allProjectsJson(sort: {order: DESC, fields: data_created}) {
      edges {
        node {
          id
          featured {
            src {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          audio
          categories
          data_created
          path
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
        }
        previous {
          title
        }
      }
    }
  }
`
