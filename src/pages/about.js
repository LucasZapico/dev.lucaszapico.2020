import React from "react"
import Link from "gatsby-plugin-transition-link/AniLink"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="About" />
    <div className="page--about content--container">
      <h1 className="about--header">About Northern Wind & Southern Sun</h1>
      <p>We create with the intention of having a warm heart but cool heads.</p>
      <p>This means we try to hold two things paramount while building. </p>
      <p>
        That is to empathize with our customers and our customers' businesses.
        When their customers are happy they are happy and then we are happy.
        Simple!{" "}
      </p>
      <p>
        Having a cool head means that at the end of the day this is a business
        and we need to build things in a competitive manner, which means using
        our resources effectively and frugally. Not So Simple!{" "}
      </p>
      <p>
        These two intentions are the foundation of Northern Cold Wind and a
        Souther Warm Sun.{" "}
      </p>
      <p>
        We hope that this is apparent in the work we do. That being said there
        is always room to improve and we love to hear how we can be better or if
        you love what we do give us a shout. We love that too.{" "}
      </p>
      <p>Cheers, from Norther Wind &amp; Southern Sun Team</p>
      <div className="team--container">
        <div className="team--profile">
          <h4>Ardian Ajavzi</h4>
          <h6>Project Manager & Developer</h6>
          <div className="team--img">
            <Img
              fluid={data.teamOneImg.childImageSharp.fluid}
              objectFit="contain"
            />
          </div>
        </div>
        <div className="team--profile">
          <h4>Lucas Zapico</h4>
          <h6>Designer & Developer</h6>
          <div className="team--img">
            <Img
              fluid={data.teamTwoImg.childImageSharp.fluid}
              objectFit="contain"
            />
          </div>
        </div>
        <div className="team--profile">
          <h4>Alex Bush</h4>
          <h6>Account Manager & Copy Writer</h6>
          <div className="team--img">
            <Img
              fluid={data.teamThreeImg.childImageSharp.fluid}
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default AboutPage

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
