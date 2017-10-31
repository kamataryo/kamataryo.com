import * as React from 'react'
import Meta from '../components/Meta'
import About from '../components/contents/About'

const AboutView = () => {
  return (
    <div id={ 'about' }>

      <Meta title={ 'About' } type={ 'article' } />
      <About />
    </div>
  )
}

export default AboutView
