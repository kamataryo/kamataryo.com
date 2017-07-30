import * as React from 'react'

const AboutContent = () => {
    return (
      <div className={ 'content about-content' }>
        <h2 className={ 'page-title' }>{ 'About Me' }</h2>
        <p className={ 'article-content' }>{ `
          I am web developer.
          I code mainly using JavaScript, PHP and C# and release some open source projects.
          My main concerns are..
        ` }</p>
        <ul>
          <li>{ 'high performance SPA (Single Page Application)' }</li>
          <li>{ 'UI & API designing' }</li>
          <li>{ 'development methodology' }</li>
        </ul>
      </div>
    )
}

export default AboutContent
