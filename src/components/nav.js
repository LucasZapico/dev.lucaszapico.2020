import React, { useState } from 'react'
import Mark from '../assets/images/mark.svg'
import MarkLight from '../assets/images/mark-light.svg'
import { IoIosMenu, IoIosClose } from 'react-icons/io'
import Link from 'gatsby-plugin-transition-link/AniLink'

const PrimaryMenu = () => (
  <div className="pri-menu">
    <ul className="pri-menu__items">
      <div>
        <li className="pri-menu__item h3">
          <Link fade duration={1} to="/">
            Home
          </Link>
        </li>
        <li className="pri-menu__item h3">
          <Link fade duration={1} to="/about">
            About
          </Link>
        </li>
        <li className="pri-menu__item h3">
          <Link fade duration={1} to="/articles">
            Articles
          </Link>
        </li>
      </div>
      <div>
        {/* <li className="nav--item h3">
            <Link swipe to="/all-cases">
              Cases
            </Link>
          </li> */}

        {/* <li className="nav--item h3">
            <Link  to="/method">
              Method
            </Link>
          </li>*/}
        {/* <li className="pri-menu__item h3">
          <Link to="/playground">Playground</Link>
        </li> */}
      </div>
    </ul>
    <MarkLight className="pri-menu__mark" />
  </div>
)

const PrimaryNav = () => {
  //   const width = useCurrentWidth()
  const width = 900
  const [showMenu, setShowMenu] = useState(false)
  const [playSt, setPlaySt] = useState('stop')

  return (
    <>
      <div className="nav__container">
        <nav className="nav ">
          <div className="mark">
            <Link fade duration={1} to="/">
              <Mark />
            </Link>
          </div>
          {width > 800 ? (
            <Link fade duration={1} to="/">
              <div className="nav__header h4">Dev.LucasZapico</div>
            </Link>
          ) : undefined}
          <>
            <div className="sidenav__toggle">
              {!showMenu ? (
                <IoIosMenu
                  onClick={() => {
                    setShowMenu(!showMenu)
                  }}
                />
              ) : (
                <IoIosClose
                  onClick={() => {
                    setShowMenu(!showMenu)
                  }}
                />
              )}
            </div>
          </>
        </nav>
      </div>
      {showMenu ? (
        <div className="sidenav__primary">
          <PrimaryMenu width={width} />
        </div>
      ) : undefined}
    </>
  )
}

export default PrimaryNav
