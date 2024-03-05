import React from "react"
import "./Footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faPinterest } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__top"></div>
      <div className="footer__middle"></div>
      <div className="footer__buttom">
        <div className="footer__buttom--icons">
          <div>
            <FontAwesomeIcon icon={faFacebook} />
          </div>
          <div>
            <FontAwesomeIcon icon={faInstagram} />
          </div>
          <div>
            <FontAwesomeIcon icon={faPinterest} />
          </div>
          <div>
            <FontAwesomeIcon icon={faTwitter} />
          </div>
          <div>
            <FontAwesomeIcon icon={faWhatsapp} />
          </div>
        </div>
        <div className="footer__buttom--p">
          <div>
            <p>Copyright @ 2024 Pawcupid.com</p>
          </div>
          <div>
            <p>
              All trademarks are owned by Paw Cupid N.Y. Inc., or used with
              permission.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
