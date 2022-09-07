import React from 'react'
import '../css/header.css'
import Githubicon from './githubIcon.svg'

export default function Header() {
  return (
    <div className="container">
      <nav>
        <img className='logo' src="https://raw.githubusercontent.com/AFZL210/MarkUp/main/media/logo.png" alt="MarkUp Logo" />
        <span><img src={Githubicon} alt="" className="github-logo" /><a href="https://github.com/AFZL210/MarkUp">GitHub</a></span>
      </nav>
    </div>
  )
}
