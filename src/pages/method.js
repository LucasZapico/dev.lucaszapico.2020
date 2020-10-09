import React, { useRef, useLayoutEffect, useEffect, useState } from "react"
import Link from "gatsby-plugin-transition-link"

import LayoutLite from "../components/layout-lite"
import Image from "../components/image"
import SEO from "../components/seo"
import { Controller, Scene } from "react-scrollmagic"
import { Tween, Timeline } from "react-gsap"
import { useScroll } from "../hook"
import Footer from "../components/footer"
import * as Scroll from "react-scroll"
import { animateScroll as scroll, scrollSpy, scroller } from "react-scroll"

const MethodPage = () => {
  const [viewHeight, setViewHeight] = useState(null)
  // const { scrollDirection } = useScroll()
  const methodSectionOne = useRef(null)
  const [currentScroll, setCurrentScroll] = useState(null)

  useLayoutEffect(() => {
    setViewHeight(prev => {
      return methodSectionOne.current.childNodes[0].getBoundingClientRect()
        .height
    })
  }, [])

  // console.log(vh

  return (
    <LayoutLite>
      <SEO title="Method" />
      <div className="method--container">
        <Controller
          // globalSceneOptions={{ triggerHook: "onLeave" }}
          refreshInterval="200"
        >
          {/* <h1>Method</h1> */}
          <Scene
            duration="200%"
            // indicators={true}

            triggerHook="onLeave"
            pin
            enabled={true}
          >
            <Timeline
              wrapper={<div id="sectionContainer" ref={methodSectionOne}></div>}
            >
              <Tween from={{ opacity: 1 }} to={{ opacity: 0 }}>
                <section className="method--section">
                  <div>
                    <h2 className="h3 method--header subheader">
                      Clear Objective
                    </h2>
                    <h3 className="method--content h2">
                      Create thoughtful, robust, and sustainable digital
                      business solutions taking into account unique business
                      needs, and audiences.
                    </h3>
                  </div>
                </section>
              </Tween>
              <Tween
                from={{ opacity: 0, y: "100%" }}
                to={{ opacity: 1, y: "10%" }}
              >
                <section className="method--section">
                  <div>
                    <h2 className="h3 method--header ">Strategic</h2>
                    <h3 className="method--content h2">
                      Be frugal and attentive, producing at pace while ensuring
                      that we are building for tomorrow as well as today.
                    </h3>
                  </div>
                </section>
              </Tween>
              <Tween
                from={{ opacity: 0, y: "100%" }}
                to={{ opacity: 1, y: "10%" }}
              >
                <section className="method--section">
                  <div>
                    <h2 className="h3 method--header subheader">
                      Brand and Business First
                    </h2>
                    <h3 className="h2 method--content">
                      Discover who our partners are and their goals. Then ensure
                      these principles infuse engagement strategies.
                    </h3>
                  </div>
                </section>
              </Tween>
              <Tween
                from={{ opacity: 0, y: "100%" }}
                to={{ opacity: 1, y: "10%" }}
              >
                <section className="method--section">
                  <Footer />
                </section>
              </Tween>
            </Timeline>
          </Scene>
          {/* add contact form */}
        </Controller>
      </div>
    </LayoutLite>
  )
}

export default MethodPage
