import React from "react"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="">
        <div className="form--container">
          <div className="form--message">
            <h3 className="h2">Stay In Touch</h3>
            <p>Get emails from us once and a while.</p>
          </div>
          <form className="form">
            <div>
              <input
                type="email"
                // value=""
                name="EMAIL"
                className="form--email h2"
                id="mce-EMAIL"
                placeholder="enter email address"
                required
              />
            </div>
            {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
            <div className="form--bot" aria-hidden="true">
              <input
                type="text"
                name="b_aceee2c7e27b999a0a58660a5_98c67c3262"
                tabIndex="-1"
                value=""
              />
            </div>
            <div className="clear">
              <input
                type="submit"
                value="Sign Me Up"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="form--submit btn--primary__invert"
              />
            </div>
          </form>
        </div>
        <hr></hr>
        <div className="footer--contact">
          <div className="contact">
            <div>
              <div className="footer--email">
                <h5>Hire Us</h5>
                business@NorthernWind-SouthernSun.com
              </div>
            </div>
            <div className="footer--email">
              <div className="footer--email">
                <h5> Say Hello</h5>
                hello@NorthernWind-SouthernSun.com
              </div>
              <div className="footer--email">
                <h5>Join The Team</h5>
                careers@NorthernWind-SouthernSun.com
              </div>
            </div>
          </div>
          <div>
            {/* <h4 className="footer--email">
            We specialize in sustainable digital engagement solutions
          </h4> */}
          </div>
        </div>
        <div>
          {/* © 2020, Built with <a href="https://www.gatsbyjs.org">Gatsby</a> */}
          <div>
            {/*  */}
            Last-Modified: 06/25/2020
            {/*  */}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
