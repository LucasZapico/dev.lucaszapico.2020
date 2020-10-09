import React from "react"
import PropTypes from "prop-types"
import Layout from "./layout"

const CasesLayout = ({ children }) => {
  return (
    <Layout>
      <div className="page projects content--container">
        <main>{children}</main>
      </div>
    </Layout>
  )
}

CasesLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default CasesLayout
