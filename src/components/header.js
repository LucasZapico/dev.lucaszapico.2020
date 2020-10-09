import PropTypes from "prop-types"
import React from "react"
import PrimaryNav from "./nav"

const Header = ({ siteTitle }) => (
  <header>
    <PrimaryNav />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: "",
}

export default Header
