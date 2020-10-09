import React from "react"
import Link from "gatsby-plugin-transition-link"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const ServicesPage = () => (
  <Layout>
    <SEO title="Services" />
    <div className="page--services">
      <section className="services--container">
        {/* todo: add table of contents  */}
        <div className="content--container">
          <h1>Services</h1>
          <h5>We specialize in sustainable digital engagement solutions</h5>
        </div>
        <div className="services--item char-100 ">
          <h3 className="h3 services--item">Branding</h3>
          <div className="services--content">
            <p>
              We discover the driving forces of a business and what impact they
              want to deliver to their audience. From this, we tailor, mark,
              color, typography, illustration, voice, and engagement strategy.
              We uses clear brand position to be our guiding star for all other
              productions.
            </p>
            <h5 className="h5 focus">
              Focus: Discover a clear brand position, thereby enabling alignment
              checks on all future projects and content.
            </h5>
          </div>
        </div>
        <div className="services--item char-100">
          <div className="h3 services--item ">
            Art Direction and Digital Illustration
          </div>
          <div className="services--content">
            <p>
              We discover aligned and frugal creative art that brings brand and
              content to life.
            </p>
            <p className="h5 focus char-100">
              Focus: Put forth art that enhances digital experience without
              breaking the budget.
            </p>
          </div>
        </div>
      </section>
      <section className="services--container">
        <div className="services--item char-100">
          <div className="h3 services--item">Bespoke Web Design</div>
          <div className="services--content">
            <p>
              We partner, to create web experiences that engage audiences to
              drive business objectives and be points of pride and excitement.
            </p>
            <p className="h5 focus">
              Focus: Be attentive to produce a web experience that engages
              rather then inundates.
            </p>
          </div>
        </div>
        <div className="services--item char-100">
          <div className="h3 services--item">Content Strategy </div>
          <div className="services--content">
            <p>
              We listen, analyze, and then produce sustainable content creation
              strategies focused on having as little burden on businesses as
              possible.
            </p>
            <p className="h5 focus">
              Focus: Deliver an optimized content strategy that takes into
              account business resources, channels opportunity.
            </p>
          </div>
        </div>
      </section>
      <section className="services--container">
        <div className="services--item char-100">
          <div className="h3 services--item">Tailored Email Marketing</div>
          <div className="services--content">
            <p>
              We use brand position and cohesive strategy to produce email
              marketing that aligns with web and business objectives and
              messaging.
            </p>
            <p className="h5 focus">Focus: Be genuine with our audiences.</p>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default ServicesPage
