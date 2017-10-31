import * as React from 'react'
import Navigation from './Navigation'
import { Justify } from '../styled/common'
// import styled from 'styled-components'

// const ClipHeaderImage = styled.img`
//
// `

const Header = () => {
  return (
    <Justify>
      <header className={ 'header' } id={ 'header' }>
        { /* <img src={ './ogp.jpg' } alt={ '' } /> */ }
        <h1 className={ 'main-title' }>{ 'Kamata Ryo' }</h1>
        <p className={ 'sub-title' }>{ 'Web Developer | API Developer | UI Designer | Naturalist' }</p>
        <Navigation prefix={ 'header' } />
      </header>
    </Justify>
  )
}

export default Header
