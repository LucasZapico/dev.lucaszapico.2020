/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import '../assets/sass/_style.scss'
import Scrollbar from 'react-smooth-scrollbar'

const LayoutLite = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Scrollbar>
        <div className="container" style={{ height: '100vh' }}>
          {children}
        </div>
      </Scrollbar>
      {/* add script tags that need to be at the bottom of body */}
    </>
  )
}

LayoutLite.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutLite
