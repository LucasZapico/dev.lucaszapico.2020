import React from "react"
import PropTypes from "prop-types"
import Layout from "./layout"

const ProjectLayout = ({ children }) => {
  return (
    <Layout>
      <div className="page projects content--container">
        <main>{children}</main>
      </div>
    </Layout>
  )
}

ProjectLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ProjectLayout
