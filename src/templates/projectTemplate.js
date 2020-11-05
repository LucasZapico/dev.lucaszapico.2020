import React, { useRef, useEffect } from 'react'
import SEO from '../components/seo'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'

import {
  IoIosArrowRoundBack,
  IoIosArrowRoundForward,
  IoIosOpen,
} from 'react-icons/io'

export default function Template(props, location) {
  const audioElement = useRef(null)

  console.log('props', props)
  const page = props.pageContext.project.node
  const next = props.pageContext.project.next
  const prev = props.pageContext.project.previous
  const images = page.content.images
  const summary = page.content.summary
  const main = page.content.main

  useEffect(() => {
    if (audioElement.current) {
      console.log(audioElement.current)
      audioElement.current.playbackRate = '1.5'
    }
    return () => {}
  }, [audioElement])

  return (
    <Layout>
      <div className="page projects content--container">
        <div className="projects measure__default">
          <SEO title={`${page.title}`} />
          <div className="">
            <div className="h1">{page.title}</div>
            <Img
              className="margin__top"
              fluid={page.featured.src.childImageSharp.fluid}
              objectFit="contain"
            />
          </div>
          <div className="project__header margin__top--l">
            <div className="project__summary margin__y">
              <div className="project__links margin__bottom--m">
                {page.link ? (
                  <a
                    className="link margin__right--m margin__top"
                    href={page.link}
                  >
                    See {page.title} live <IoIosOpen />
                  </a>
                ) : undefined}
                {page.repo ? (
                  <a className="link margin__top" href={page.repo}>
                    See {page.title} repository <IoIosOpen />
                  </a>
                ) : undefined}
              </div>
              <div className="strong">Challenge</div>
              <div className="body__large margin__bottom--m margin__top">
                {summary.challenge}
              </div>
              <div className="strong">Outcome</div>
              <div className="body__large margin__bottom--m margin__top">
                {summary.outcome}
              </div>
              <div className="margin__bottom--m">
                {page.audio ? (
                  <>
                    <div className="strong margin__y ">
                      Listen to the project summary
                    </div>
                    <audio controls ref={audioElement}>
                      <source src={page.audio} type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                  </>
                ) : undefined}
              </div>
              <div className="container flex flex__sp-b margin__bottom--m">
                <div>
                  <div className="strong margin__bottom ">
                    Deliverables
                  </div>
                  <div className="">
                    {summary.deliverables.map((d, i) => {
                      const key = `${d.toLowerCase()}-${i}`
                      return (
                        <div
                          className="body__default margin__y"
                          key={key}
                        >
                          {d}
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div className="project__tech margin__left--l">
                  <div className="strong margin__bottom">
                    Technology
                  </div>
                  {page.technology_stack.map((t, i) => {
                    const key = `${t.toLowerCase()}-${i}`
                    return (
                      <div
                        className="body__default margin__y"
                        key={key}
                      >
                        {t}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="project__main margin__top--l ">
            {images.imgOne ? (
              <Img
                fluid={images.imgOne.childImageSharp.fluid}
                objectFit="contain"
              />
            ) : undefined}
            {main.overview ? (
              <div className="margin__y--m">
                <div className="strong margin__y ">Overview</div>
                <div className="body__large">{main.overview}</div>
              </div>
            ) : undefined}
            {main.objective ? (
              <div className="margin__y--m">
                <div className="strong margin__y ">Objective</div>
                <div className="body__large">{main.objective}</div>
              </div>
            ) : undefined}

            {main.features ? (
              <div className="margin__y--m">
                <div className="strong margin__y ">Features</div>
                <div className="body__large">{main.features}</div>
              </div>
            ) : undefined}
            {main.challenge ? (
              <div className="margin__y--m">
                <div className="strong margin__y ">Challenge</div>
                <div className="body__large">{main.challenge}</div>
              </div>
            ) : undefined}

            {main.solution ? (
              <div className="margin__y--m">
                <div className="strong margin__y ">Solution</div>
                <div className="body__large">{main.solution}</div>
              </div>
            ) : undefined}
            {main.objective ? (
              <div className="margin__y--m">
                <div className="strong margin__y ">Result</div>
                <div className="body__large">{main.result}</div>
              </div>
            ) : undefined}

            {main.objective ? (
              <div className="body__large">{main.takeaways}</div>
            ) : undefined}
          </div>
          <div className="project__more margin__top--m">
            <div className="">
              {prev !== null ? (
                <Link
                  swipe
                  direction="left"
                  to={prev.path}
                  className="icon__arrow AniLink__primary--dark"
                >
                  <IoIosArrowRoundBack /> {prev.title}
                </Link>
              ) : undefined}
            </div>
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
          </div>
        </div>
      </div>
    </Layout>
  )
}
