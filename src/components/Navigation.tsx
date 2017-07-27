import * as React from 'react'
import ActiveLink from '../containers/ActiveLink'

const Navigation = () => {
  return (
    <nav className={ 'navigation' } role={ 'nav' }>
      <ul>
        <li><ActiveLink to={ '/' }>{ 'Home' }</ActiveLink></li>
        <li><ActiveLink to={ '/about' }>{ 'About' }</ActiveLink></li>
        <li><ActiveLink to={ '/skills' }>{ 'Skills' }</ActiveLink></li>
        <li><ActiveLink to={ '/speaking' }>{ 'Speaking' }</ActiveLink></li>
        <li><ActiveLink to={ '/contact' }>{ 'Contact' }</ActiveLink></li>
      </ul>
    </nav>
  )
}

export default Navigation
