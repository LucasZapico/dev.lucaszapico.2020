import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../components/project-layout"
import { IoIosArrowRoundForward } from "react-icons/io"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export default function Template(props) {
  console.log("props", props)
  const page = props.pageContext.project.node
  const next = props.pageContext.project.next
  const prev = props.pageContext.project.previous
  console.log('next', next)
  console.log('re', prev)
  const summary = page.content.summary
  const main = page.content.main
  return (
    <Layout>
      <div className="projects page measure__default">
        <Helmet title={`${page.title}`} />
        <div className="">
          <div className="h1">{page.title}</div>
        </div>
        <div className="project__header">
          <div className="project__summary margin__y">
            <div className="strong">Challenge</div>
            <div className="body__large margin__bottom--m margin__top">
              {summary.challenge}
            </div>
            <div className="strong">Outcome</div>
            <div className="body__large margin__bottom--m margin__top">
              {summary.outcome}
            </div>
            <div className="strong">Deliverables</div>
            <div className="">
              {summary.deliverables.map((d, i) => {
                const key = `${d.toLowerCase()}-${i}`
                return (
                  <div className="body__default" key={key}>
                    {d}
                  </div>
                )
              })}
            </div>
          </div>
          <div className="project__tech margin__bottom--m margin__top">
            <div className="strong">Technology</div>
            {page.technology_stack.map((t, i) => {
              const key = `${t.toLowerCase()}-${i}`
              return (
                <div className="body__default" key={key}>
                  {t}
                </div>
              )
            })}
          </div>
          <div>
            <audio controls>
              <source src={page.audio} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
        <div className="project__main">
          <div className="body__large">{main.overview}</div>
          <div className="body__large">{main.objective}</div>
          <div className="body__large">{main.features}</div>
          <div className="body__large">{main.challenge}</div>
          <div className="body__large">{main.solution}</div>
          <div className="body__large">{main.result}</div>
          <div className="body__large">{main.deliverables}</div>
          <div className="body__large">{main.takeaways}</div>
        </div>
        <div className="project__more">
          <div className="">
            {next !== null ? (
              <AniLink
                swipe
                direction="right"
                to={next.path}
                className="icon__arrow AniLink__primary--dark"
              >
                {next.title} <IoIosArrowRoundForward />
              </AniLink>
            ) : undefined}
          </div>
          <div className="">
            {prev !== null ? (
              <AniLink
                swipe
                direction="left"
                to={prev.path}
                className="icon__arrow AniLink__primary--dark"
              >
                {prev.title} <IoIosArrowRoundForward />
              </AniLink>
            ) : undefined}
          </div>
        </div>
      </div>
    </Layout>
  )
}
