/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import LayoutLite from './layout-lite'
import Footer from './footer'
import Nav from './nav'
const Layout = ({ children }) => {
  return (
    <LayoutLite>
      <Nav />
      <main className="main">{children}</main>
      <Footer />
    </LayoutLite>
  )
}

export default Layout
