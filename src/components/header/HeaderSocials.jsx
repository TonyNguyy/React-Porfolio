import React from 'react'
import {BsLinkedin, BsGithub, BsTwitter} from "react-icons/bs"



const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a  href="https://www.linkedin.com/in/tonynguyy/" target="blank"><BsLinkedin/></a>
        <a  href="https://github.com/TonyNguyy" target="blank"><BsGithub/></a>
        <a  href="http://twitter.com/codingwithtony" target="blank"><BsTwitter/></a>
    </div>
  )
}

export default HeaderSocials