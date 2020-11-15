import React from 'react'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import { Link, graphql } from 'gatsby'
import { IoIosArrowRoundForward } from 'react-icons/io'
import SEO from '../components/seo'

const ProjectSection = ({ projectData, progress }) => {
  console.log(projectData.title, projectData.featured.src)
  return (
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
          <div className="">Tags</div>
          <div className="container tags ">
            {projectData.tags.map((t, i) => (
              <div key={i} className="tag ">
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
            <Img
              fluid={projectData.featured.src.childImageSharp.fluid}
              objectFit="contain"
            />
          </div>
        </div>

        <Link
          swipe
          direction="right"
          to={projectData.path}
          className="icon__arrow link__primary--dark"
        >
          More On The project{''} <IoIosArrowRoundForward />
        </Link>
      </div>
    </div>
  )
}

const HomePage = ({ data, location }) => {
  const edges = data.recentProjects.edges
  return (
    <Layout>
      <SEO title="home" />
      <div className="container home">
        <header className="home header">
          <div className="hero">
            <div className="hero__content content__container margin__left--m">
              <h2 className="">
                Hello, I am Lucas. Thanks for stopping&nbsp;by.
              </h2>
              <h5>
                Mostly a Frontend developer focusing on Reactjs.
              </h5>
              {/* <h6 className="body margin__top">
                But I enjoy the gambit of challenges in building
                products including branding, UI/UX decisions and
                project management...I hope you feel the same after
                taking a look around.
              </h6> */}
            </div>
          </div>
        </header>
        <div className="content home">
          <section className="section projects">
            <div className="projects__header">
              <div className="content__container">
                <h2 className="h1 margin__left--m">Projects</h2>
              </div>
            </div>
            <div className="projects__container">
              {edges.map(edge => (
                <ProjectSection
                  key={edge.node.id}
                  projectData={edge.node}
                />
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
    recentProjects: allProjectsJson(
      sort: { order: DESC, fields: data_created }
    ) {
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
