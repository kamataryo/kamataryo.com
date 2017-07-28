import * as React from 'react'
import Navigation from './Navigation'

const Footer = () => {
  return (
    <footer id={ 'footer' } className={ 'footer' }>
      <h2 className={ 'footer-title' }>{ 'footer' }</h2>
      <Navigation prefix={ 'footer' } />
    </footer>
  )
}

export default Footer
