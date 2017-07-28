import * as React from 'react'
import Meta from '../components/Meta'
import AboutContent from '../components/contents/About'

const AboutView = () => {
  return (
    <div id={ 'about' } className={ 'about' }>

      <Meta title={ 'About' } type={ 'article' } />
      <AboutContent />
    </div>
  )
}

export default AboutView
