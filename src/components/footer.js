import React, {useState} from "react"
import { IoIosLink, IoIosHeart } from 'react-icons/io';
import {Link } from 'gatsby'

const Footer = () => {
    const [formInput, setFormInput] = useState({
        email: ''
    })
    const handleFormChange = (e) => {
        const newFormData = formInput;
        newFormData[e.target.type] = e.target.value;
        console.log(formInput);
      };
      const handleSubmit = (e) => {
        e.preventDefault();
      };
    return ( 
        <footer className="footer container padding--all">
      <div className="footer container__content">
        <div className="form container">
          <div className="form__message">
            <h4>Cheers</h4>
            <div className="policy__item">
          <Link to="/style-guide">Style Guide</Link>
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
        <hr></hr>
        <div className="footer--contact">
          {/* <div className="">
            
          </div> */}
          {/* <div className="contact">
            <div>
              <div className="contact__email">
                <div className="contact__header">Make or check and order</div>
                email@email.com
              </div>
            </div>
            <div className="contact__phone">
              <div className="contact__header">Give us a call</div>
              111.111.1111
            </div>
          </div> */}
          <div>
            {/* <h4 className="footer--email">
            We specialize in sustainable digital engagement solutions
          </h4> */}
          </div>
        </div>
        <div>
          <div>
            © 2020, Built with <IoIosHeart /> By Lucas Zapico
          </div>
          <div>
            {/*  */}
            Last-Modified: 2020/10/18
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
     );
}
 
export default Footer;