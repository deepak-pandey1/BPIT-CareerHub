import React from 'react'

export default function Contact() {
  return (
    <div>
    <div className="contact ">
          <section className="contacts">
            <div className="container ">
              <div className="row">
                <div className="nvblue-bx" />
                <div className="col-sm-12 col-md-7 col-lg-8 nvblue wow fadeInDown" style={{visibility: 'visible', animationName: 'fadeInDown'}}>
                  <div className="contact-info"><br />
                    <h3>Quick Contact</h3>
                    <form className="contact-form" method="post" name="contact_frm" id="contact_frm" action="https://formspree.io/f/xrgdzbvl">
                      <div className="row">
                        <div className="col-md-4">
                          <div className="md-form mb-0"><input type="text" id="name" name="name" className="form-control frm-name" placeholder="Name" required /></div>
                        </div>
                        <div className="col-md-4">
                          <div className="md-form mb-0"><input type="tel" id="phone" name="phone" className="form-control frm-mob" placeholder="Phone" pattern="^\d{10}$" required /></div>
                        </div>
                        <div className="col-md-4">
                          <div className="md-form mb-0"><input type="email" id="email" name="email" className="form-control frm-email" placeholder="Email" required /></div>
                        </div>
                        <div className="col-md-12">
                          <div className="md-form mb-0"><textarea name="message" id="message" className="form-control frm-msg" placeholder="Message" required defaultValue={""} /></div>
                        </div>
                        <div className="col-md-12">
                          <div className="my-4"><input type="submit" name="contact-submit" className="form-btn" defaultValue="Submit" /></div>
                          <br />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="bgc col-sm-12 col-md-5 col-lg-4 ltblue wow fadeInDown" style={{visibility: 'visible', animationName: 'fadeInDown'}}>
                  <div className="addrs-info"><br />
                    <h3 id="contactm">Contact Us</h3><br />
                    <ul>
                      <li className="map"><i className="bi bi-geo-alt icony" />
                        <p>BPIT , Rohini Sec 11, K.N Katju Marg, Delhi
                          110085 </p>
                      </li>
                      <li className="mob"><i className="bi bi-phone icony" />
                        <p>+91 987654321</p>
                      </li>
                      <li className="mail"><i className="bi bi-envelope icony" />
                        <p>bpit33334@gmail.com</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="ltblue-bx" />
              </div>
            </div>
          </section>
        </div>
        <div className="container-fluid back p-4 text-white text-center">
          <h2>About Us</h2>
          <div className="a-1 container contain  text-center">
            <div className="a-1-1 p-4">
              <h4>What We Do?</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae recusandae ullam laboriosam repellat
                doloribus soluta, culpa consequuntur aliquid nemo quibusdam fugiat dolores, omnis vitae debitis itaque!
                Repellat vero sequi ipsam alias aspernatur iste aperiam deserunt rem dicta ut, ad doloribus saepe ea animi
                fuga soluta, exercitationem cumque aliquam eaque provident?</p>
            </div>
            <div className="a-1-2 p-4">
              <h4>Why Choose This Website?</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae recusandae ullam laboriosam repellat
                doloribus soluta, culpa consequuntur aliquid nemo quibusdam fugiat dolores, omnis vitae debitis itaque!
                Repellat vero sequi ipsam alias aspernatur iste aperiam deserunt rem dicta ut, ad doloribus saepe ea animi
                fuga soluta, exercitationem cumque aliquam eaque provident?</p>
            </div>
            <div className="a-1-3 p-4">
              <h4>What's Our Motive?</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae recusandae ullam laboriosam repellat
                doloribus soluta, culpa consequuntur aliquid nemo quibusdam fugiat dolores, omnis vitae debitis itaque!
                Repellat vero sequi ipsam alias aspernatur iste aperiam deserunt rem dicta ut, ad doloribus saepe ea animi
                fuga soluta, exercitationem cumque aliquam eaque provident?</p>
            </div>
          </div>
        </div>
      </div>
  )
}
