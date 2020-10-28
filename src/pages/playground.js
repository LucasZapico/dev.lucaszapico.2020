import React from 'react'
import { graphql, Link } from 'gatsby'
// import Link from "gatsby-plugin-transition-link/AniLink"
import Layout from '../components/layout'
import Img from 'gatsby-image'
import SEO from '../components/seo'

const PlaygroundPage = () => (
  <Layout>
    <SEO title="playground" />
    <div className="page content--container">
      <h1 className="h2 header">Playground</h1>

      <div className="">
        <h3>Development</h3>
        {/* <div className="team--img">
            <Img
              fluid={data.teamThreeImg.childImageSharp.fluid}
              objectFit="contain"
            />
          </div> */}
      </div>
    </div>
  </Layout>
)

export default PlaygroundPage

// export const pageQuery = graphql`
//   query {

//   }
// `
