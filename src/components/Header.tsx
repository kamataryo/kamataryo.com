import * as React from 'react'
import Navigation from './Navigation'

const Header = () => {
  return (
    <header id={ 'header' }>
      <h1>{ 'Kamata Ryo | Web Developer' }</h1>
      <Navigation />
    </header>
  )
}

export default Header
