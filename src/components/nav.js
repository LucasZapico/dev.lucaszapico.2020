import React, { useState } from "react"
import Mark from "../assets/images/mark.svg"
import MarkLight from "../assets/images/mark-light.svg"
import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { IoIosMenu, IoIosClose } from "react-icons/io"
import { Tween, Timeline, PlayState, Controls } from "react-gsap"
import { useCurrentWidth } from "../hook"

const PrimaryMenu = ({ width }) => (
  <div>
    <ul className="nav--items">
      <div>
        <li className="nav--item h3">
          <AniLink fade to="">
            Home
          </AniLink>
        </li>
        <li className="nav--item h3">
          <AniLink fade to="/about">
            About
          </AniLink>
        </li>
      </div>
      <div>
        {/* <li className="nav--item h3">
          <AniLink fade to="/all-cases">
            Cases
          </AniLink>
        </li> */}

        <li className="nav--item h3">
          <AniLink fade to="/method">
            Method
          </AniLink>
        </li>
        <li className="nav--item h3">
          <AniLink fade to="/services">
            Services
          </AniLink>
        </li>
      </div>
    </ul>
    <MarkLight className="nav--mark" />
  </div>
)

const PrimaryNav = () => {
  const width = useCurrentWidth()
  const [showMenu, setShowMenu] = useState(false)
  const [playSt, setPlaySt] = useState("stop")

  return (
    <nav className="nav">
      <div className="mark">
        <AniLink fade to="/">
          <Mark />
        </AniLink>
      </div>
      {width > 800 ? (
        <AniLink fade to="/">
          <div className="nav--header h4">Dev.LucasZapico</div>
        </AniLink>
      ) : undefined}
      <>
        <div className="sidenav--toggle">
          {!showMenu ? (
            <IoIosMenu
              onClick={() => {
                setShowMenu(!showMenu)
                setPlaySt("play")
              }}
            />
          ) : (
            <IoIosClose
              onClick={() => {
                setShowMenu(!showMenu)
                setPlaySt("reverse")
              }}
            />
          )}
        </div>

        <Timeline paused={true} playState={playSt}>
          <Tween from={{ height: "0%" }} to={{ height: "70%" }}>
            <div className="sidenav--primary">
              <PrimaryMenu width={width} />
            </div>
          </Tween>
        </Timeline>
      </>
    </nav>
  )
}

export default PrimaryNav
