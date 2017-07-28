import * as React from 'react'
import Navigation from './Navigation'

const Header = () => {
  return (
    <header className={ 'header' } id={ 'header' }>
      <h1 className={ 'main-title' }>{ 'Kamata Ryo' }</h1>
      <p className={ 'sub-title' }>{ 'Web Developer | API Developer | UI Designer | Naturalist' }</p>
      <Navigation prefix={ 'header' } />
    </header>
  )
}

export default Header
