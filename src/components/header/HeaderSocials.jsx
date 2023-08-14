import React from 'react'
import {BsLinkedin, BsGithub, BsTwitter} from "react-icons/bs"



const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="http://linkedin.com" target="blank"><BsLinkedin/></a>
        <a href="http://github.com" target="blank"><BsGithub/></a>
        <a href="http://twitter.com" target="blank"><BsTwitter/></a>
    </div>
  )
}

export default HeaderSocials