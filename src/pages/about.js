import React from 'react'
// import Link from "gatsby-plugin-transition-link/AniLink"
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { IoIosArrowRoundForward } from 'react-icons/io'
import SEO from '../components/seo'

const AboutPage = ({ data, location }) => (
  <Layout>
    <SEO title="About" />
    <div className="page container__content ">
      <div className="char__readable measure__default center">
        <h4 className="">I learn, analysis, create, and iterate.</h4>
        <h5>The Method</h5>
        <p>
          My method is to immersed, discuss, ship, get feedback, and
          to be patient because understanding and quality both take
          time and effort.
        </p>
        <h5>The Objective</h5>
        <p>
          I enjoy nothing more then building something efficient and
          competitive! The process itself is an addiction. I am
          energized by democratizing the creative process and
          exploring the unique, clever, strange, and sometime
          hilarious solutions that open collaborations fosters.
        </p>
        <h5>The Tools</h5>
        <p className="margin__bottom--l">
          I am a React and JavaScript developer with experience and
          comfort across the entire stack. On the backend I prefer
          Nodejs or Python.
        </p>

        <Link
          swipe
          top="entry"
          to="/"
          className="icon__arrow link__primary--dark "
        >
          Project{''} <IoIosArrowRoundForward />
        </Link>
      </div>
    </div>
  </Layout>
)

export default AboutPage
