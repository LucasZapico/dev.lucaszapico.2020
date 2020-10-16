import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../components/project-layout"

export default function Template(props) {
  console.log("props", props)
  const page = props.pageResources.json.pageContext.project.node
  console.log("page", page)
  const summary = page.content.summary
  const main = page.content.main
  return (
    <Layout>
      <div className="">
        <Helmet title={`${page.title}`} />
        <div className="">
          <div className="">{page.title}</div>
        </div>
        <div className="project__header">
          <div className="project__summary">
            <div className="">{summary.objective}</div>
            <div className="">{summary.challenge}</div>
            <div className="">{summary.solution}</div>
            <div className="">{summary.result}</div>
            <div className="">{summary.deliverables}</div>
          </div>
          <div className="project__tech">
            <div className="h5">Technology</div>
            {page.technology_stack.map((t, i) => {
              return <div className="">{t}</div>
            })}
          </div>
          <div>
              <div>{page.audio}</div>
            <audio controls>
              <source src={page.audio} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
        <div className="project__main">
          <div className="">{main.overview}</div>
          <div className="">{main.objective}</div>
          <div className="">{main.features}</div>
          <div className="">{main.challenge}</div>
          <div className="">{main.solution}</div>
          <div className="">{main.result}</div>
          <div className="">{main.deliverables}</div>
          <div className="">{main.takeaways}</div>
        </div>
      </div>
    </Layout>
  )
}
