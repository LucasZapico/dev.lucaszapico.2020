import React, { useState, useRef, useEffect, useLayoutEffect } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Angle from "../assets/images/angle-line.svg"
import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { useScrollPosition } from "../hook//index"
import { Tween, Timeline } from "react-gsap"
import { Controller, Scene } from "react-scrollmagic"
import { IoIosArrowRoundForward } from "react-icons/io"
import { set } from "lodash"

const ProjectSection = ({ projectData, progress }) => (
  <div className="project">
    <div className="content__container">
      <div
        className="project__header char-100"
        data-sal="slide-right"
        data-sal-delay="100"
        data-sal-easing="ease"
      >
        <h2 className="project__title">{projectData.frontmatter.title}</h2>

        <h5 className="char-100 project__subheader">
          {projectData.frontmatter.subheader}
          {progress}
        </h5>
        <div className="project__tags">
          {projectData.frontmatter.tags.map((t, i) => (
            <div key={i} className="project__tag kilo">
              {t},
            </div>
          ))}
        </div>
      </div>
      
      <AniLink fade to={projectData.frontmatter.path} className="icon__arrow">
        More On The project{""} <IoIosArrowRoundForward />
      </AniLink>
    </div>
  </div>
)

const IndexPage = ({ data }) => {
  const edges = data.recentProjects.edges
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
            <div className="hero__content content__container">
              <h2 className="">Frontend Developer who Designs</h2>
              
              <div>
                <AniLink fade to="/method" className="icon__arrow">
                  Method <IoIosArrowRoundForward />
                </AniLink>
              </div>
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
          <div className="content__container">
     
     
          </div>
        </section>
        <section className="section projects">
          <div className="projects__header">
            <div className="content__container">
              <h2 className="h1">projects</h2>
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
    recentProjects: allMdx(
      limit: 5
      filter: {
        frontmatter: { categories: { eq: "case" }, isdraft: { eq: false } }
      }
      sort: { fields: frontmatter___date_created, order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            last_modified
            title
            subheader
            path
            isdraft
            date_created
            categories
            tags
            featured {
              gif {
                src
                exc
              }
              img {
                exc
                src {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
        next {
          id
          frontmatter {
            path
          }
        }
        previous {
          id
          frontmatter {
            path
          }
        }
      }
    }
  }
`
