import React, { useState } from 'react'
import { IoIosHeart, IoIosOpen } from 'react-icons/io'
import { Link } from 'gatsby'

const Footer = () => {
  const [formInput, setFormInput] = useState({
    email: '',
  })
  const handleFormChange = e => {
    const newFormData = formInput
    newFormData[e.target.type] = e.target.value
    console.log(formInput)
  }
  const handleSubmit = e => {
    e.preventDefault()
  }
  return (
    <footer className="footer container padding__all">
      <div className="footer ">
        <div className="form container">
          <hr></hr>
          <div className="form__message">
            <h4>Cheers</h4>
            <div className="contact__email">
              <div className="contact__header">
                Let's build something unqiue.
              </div>
              <a
                target="_blank"
                href="mailto:business@lucaszapico.space"
              >
                business@lucaszapico.space
              </a>
            </div>

            {/* <p>Get emails from us once and a while.</p> */}
          </div>
          {/* <form className="form" onSubmit={(e) => handleSubmit(e)}>
            <div>
              <input
                type="email"
                defaultValue={formInput.email}
                name="EMAIL"
                onChange={(e) => {
                  handleFormChange(e);
                }}
                className="form--email h2"
                id="mce-EMAIL"
                placeholder="enter email address"
                required
              />
            </div>
           
            <div className="form--bot" aria-hidden="true">
              <input
                type="text"
                name="b_aceee2c7e27b999a0a58660a5_98c67c3262"
                tabIndex="-1"
                value=""
              />
            </div>
            <div className="clear">
              <div
                className="cta form--submit "
                onSubmit={(e) => handleSubmit(e)}
              >
                Sign Me Up&nbsp;
                
              </div>
            </div>
          </form> */}
        </div>

        <div className="footer__section margin__y--m">
          <h6>Other Places To Find Me</h6>
          <a href="https://design.lucaszapico.space" className="link">
            Design.LucasZapico.space <IoIosOpen />
          </a>
        </div>

        <div>
          <div>
            Built with <IoIosHeart /> By Lucas Zapico
          </div>
          <div>
            {/*  */}
            Last-Modified: '2020/11/04'
            {/*  */}
          </div>
        </div>
        <div className="footer__policy">
          <div className="policy__item">© Copyright 2020</div>
          {/* <div class="policy__item">
			Terms & Conditions
		</div> */}
          <div className="policy__item">
            <Link to="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
