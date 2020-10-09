import React from "react"
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io"
import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const NextPrev = ({ next, prev }) => {
  return (
    <>
      <div className="page-nav page-nav--prev">
        {prev === false ? undefined : (
          <AniLink to fade to={prev}>
            <IoIosArrowRoundBack />
          </AniLink>
        )}
      </div>
      <div className="page-nav page-nav--next">
        {next === false ? undefined : (
          <AniLink to fade to={next}>
            <IoIosArrowRoundForward />
          </AniLink>
        )}
      </div>
    </>
  )
}

export default NextPrev
