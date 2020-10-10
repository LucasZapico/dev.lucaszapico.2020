import React from "react"
import { graphql } from "gatsby"
import Link from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"

const PlaygroundPage = ({ data }) => (
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
        <div className="">
          <h3>Design</h3>
          
        </div>
    </div>
  </Layout>
)

export default PlaygroundPage

export const pageQuery = graphql`
  query {
    teamOneImg: file(relativePath: { eq: "team/ardian.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500, maxHeight: 500, grayscale: true) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    teamTwoImg: file(relativePath: { eq: "team/lucas-crop.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500, maxHeight: 500, grayscale: true) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    teamThreeImg: file(relativePath: { eq: "team/alex-bush.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500, maxHeight: 500, grayscale: true) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
