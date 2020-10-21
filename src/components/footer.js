import React, {useState} from "react"
import Mark from '../assets/images/mark.svg';




const Footer = () => {
  const [formInput, setFormInput] = useState({
    email: '',
  });
  const handleFormChange = (e) => {
    const newFormData = formInput;
    newFormData[e.target.type] = e.target.value;
    console.log(formInput);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <footer className="footer">
      <div className="">
        <div className="form--container">
          <div className="form--message">
            <h3 className="h2">Stay In Touch</h3>
            {/* <p>Get emails from us once and a while.</p> */}
          </div>
          <form className="form" onSubmit={(e) => handleSubmit(e)}>
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
            {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
            <div className="form--bot" aria-hidden="true">
              <input
                type="text"
                name="b_aceee2c7e27b999a0a58660a5_98c67c3262"
                tabIndex="-1"
                defaultValue=""
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
          </form>
        </div>
        <hr></hr>
        <div className="footer--contact">
          <div className="">
            <Mark/>
          </div>
          <div className="contact">
            <div>
              <div className="contact__email">
                <div className="contact__header">Say hello</div>
                hello@lucaszapico.space
              </div>
            </div>
            <div className="contact__phone">
              <div className="contact__header">Give us a call</div>
              111.111.111
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
            Last-Modified: 2020/10/16
            {/*  */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
