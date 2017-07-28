import * as React from 'react'
import Meta from '../components/Meta'

const AboutView = () => {
  return (
    <div id={ 'about' }>

      <Meta title={ 'About' } type={ 'article' } />
      <p>{ 'This is About View.' }</p>
    </div>
  )
}

export default AboutView
