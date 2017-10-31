import * as React from 'react'
import { Link } from 'react-router-dom'

const AboutContent = () => {
    return (
      <div className={ 'content about-content' }>
        <h2 className={ 'page-title' }>{ 'About Me' }</h2>
        <p className={ 'article-content' }>{ `
          I am a web developer.
          I code mainly using JavaScript, PHP and C# and release some open source projects.
        ` }</p>
        <p>{ 'My main concerns are..' }</p>
        <ul>
          <li>{ 'High performance SPA (Single Page Application)' }</li>
          <li>{ 'UI & API designing' }</li>
          <li>{ 'development methodology' }</li>
          <li>{ 'Wild lives' }</li>
          <li><Link to={ '/cat' }>{ 'Cat' }</Link></li>
        </ul>
      </div>
    )
}

export default AboutContent
