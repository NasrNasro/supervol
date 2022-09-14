import React from 'react'

function Footer() {
  return (
    <div>
        {/* footer */}
        <footer>
          <div id="contact" className="footer">
            <div className="container">
              <div className="row pdn-top-30">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <ul className="location_icon">
                    <li> <a href="#"><img src="icon/facebook.png" /></a></li>
                    <li> <a href="#"><img src="icon/Twitter.png" /></a></li>
                    <li> <a href="#"><img src="icon/linkedin.png" /></a></li>
                    <li> <a href="#"><img src="icon/instagram.png" /></a></li>
                  </ul>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                  <div className="Follow">
                    <h3>CONTACT US</h3>
                    <span>123 Second Street Fifth <br />Avenue,<br />
                      Manhattan, New York<br />
                      +987 654 3210</span>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                  <div className="Follow">
                    <h3>ADDITIONAL LINKS</h3>
                    <ul className="link">
                      <li> <a href="#">About us</a></li>
                      <li> <a href="#">Terms and conditions</a></li>
                      <li> <a href="#"> Privacy policy</a></li>
                      <li> <a href="#">News</a></li>
                      <li> <a href="#"> Contact us</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <div className="Follow">
                    <h3> Contact</h3>
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                        <input className="Newsletter" placeholder="Name" type="text" />
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                        <input className="Newsletter" placeholder="Email" type="text" />
                      </div>
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <textarea className="textarea" placeholder="comment" type="text" defaultValue={"Comment"} />
                      </div>
                    </div>
                    <button className="Subscribe">Submit</button>
                  </div>
                </div>
              </div>
              <div className="copyright">
                <div className="container">
                  <p>Copyright 2019 All Right Reserved By <a href="https://html.design/">Free html Templates</a></p>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* end footer */}
    </div>
  )
}

export default Footer