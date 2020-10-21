import React from "react"
import SEO from "../components/seo"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/project-layout"
import { IoIosArrowRoundForward } from "react-icons/io"

export default function Template(props) {
  console.log("props", props)
  const page = props.pageContext.project.node
  const next = props.pageContext.project.next
  const prev = props.pageContext.project.previous
  const summary = page.content.summary
  const main = page.content.main
  return (
    <Layout>
      <div className="projects page measure__default">
        <SEO title={`${page.title}`} />
        <div className="">
          <div className="h1">{page.title}</div>
          <Img fluid={page.featured.src.childImageSharp.fluid} objectFit="contain" />
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
            <div className="strong margin__bottom">Deliverables</div>
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
            <div className="strong margin__bottom">Technology</div>
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
        <div className="project__main margin__top ">
          <div className="margin__y--m">
            <div className="strong margin__y ">Overview</div>
            <div className="body__large">{main.overview}</div>
          </div>
          <div className="margin__y--m">
            <div className="strong margin__y ">Objective</div>
            <div className="body__large">{main.objective}</div>
          </div>
          <div className="margin__y--m">
            <div className="strong margin__y ">Features</div>
            <div className="body__large">{main.features}</div>
          </div>
          <div className="margin__y--m">
          <div className="strong margin__y ">Challenge</div>
          <div className="body__large">{main.challenge}</div>
          </div>
          <div className="margin__y--m">
          <div className="strong margin__y ">Solution</div>
          <div className="body__large">{main.solution}</div>
          </div>
          <div className="margin__y--m">
          <div className="strong margin__y ">Result</div>
          <div className="body__large">{main.result}</div>
          </div>
          <div className="margin__y--m">
          <div className="strong margin__y ">Deliverables</div>
          <div className="body__large">{main.deliverables}</div>
          </div>
          <div className="body__large">{main.takeaways}</div>
        </div>
        <div className="project__more">
          <div className="">
            {next !== null ? (
              <Link
                to={next.path}
                className="icon__arrow AniLink__primary--dark"
              >
                {next.title} <IoIosArrowRoundForward />
              </Link>
            ) : undefined}
          </div>
          <div className="">
            {prev !== null ? (
              <Link
                swipe
                direction="left"
                to={prev.path}
                className="icon__arrow AniLink__primary--dark"
              >
                {prev.title} <IoIosArrowRoundForward />
              </Link>
            ) : undefined}
          </div>
        </div>
      </div>
    </Layout>
  )
}
