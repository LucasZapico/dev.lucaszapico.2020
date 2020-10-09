import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

const MdxImgFluid = ({ img, classNa }) => {
  return (
    <div
      className="mdx-img--container"
      data-sal="slide-up"
      data-sal-delay="50"
      data-sal-easing="ease"
    >
      <Img
        className={classNa}
        objectPosition="50% 50%"
        fluid={img.childImageSharp.fluid}
        objectFit="contain"
      />
    </div>
  )
}

const MdxImgFixed = ({ img, classNa }) => {
  return (
    <div
      className="mdx-img--container"
      data-sal="slide-up"
      data-sal-delay="100"
      data-sal-easing="ease"
    >
      <Img
        className={classNa}
        fixed={img.childImageSharp.fixed}
        objectFit="contain"
      />
    </div>
  )
}

export { MdxImgFixed, MdxImgFluid }
