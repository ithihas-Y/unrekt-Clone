import React from 'react'
import { Button } from 'reactstrap'
import { 
  FaTwitter, 
  FaDiscord, 
  FaTelegramPlane, 
  FaMediumM,
  FaGithub
} from 'react-icons/fa'

export const SocialButtons = () => {
  return (
    <div className="btn-wrapper">
      <div className="button-container">
        <Button
          className="btn-icon btn-simple btn-round btn-neutral d-inline-flex justify-content-center align-items-center"
          color="default"
          href="https://twitter.com/defi_magic"
          target="_blank"
        >
          <FaTwitter />
        </Button>
        <Button
          className="btn-icon btn-simple btn-round btn-neutral d-inline-flex justify-content-center align-items-center"
          color="default"
          href="https://t.me/defimagic"
          target="_blank"
        >
          <FaTelegramPlane />
        </Button>
        <Button
          className="btn-icon btn-simple btn-round btn-neutral d-inline-flex justify-content-center align-items-center"
          color="default"
          href="https://defimagic.medium.com/"
          target="_blank"
        >
          <FaMediumM />
        </Button>
      

      </div>
    </div>
  )
}