import * as React from 'react'
import ActiveLink from '../containers/ActiveLink'

interface OwnProps {
  prefix?: string,
}

const Navigation = (props: OwnProps) => {
  const navClass = props.prefix ? `navigation navigation-${props.prefix}` : 'navigation'
  return (
    <nav className={ navClass } role={ 'nav' }>
      <ul className={ 'nav-items' }>
        <li className={ 'nav-item' }><ActiveLink to={ '/' }>{ 'Home' }</ActiveLink></li>
        <li className={ 'nav-item' }><ActiveLink to={ '/about' }>{ 'About' }</ActiveLink></li>
        <li className={ 'nav-item' }><ActiveLink to={ '/skills' }>{ 'Skills' }</ActiveLink></li>
        <li className={ 'nav-item' }><ActiveLink to={ '/speaking' }>{ 'Speaking' }</ActiveLink></li>
        <li className={ 'nav-item' }><ActiveLink to={ '/contact' }>{ 'Contact' }</ActiveLink></li>
      </ul>
    </nav>
  )
}

export default Navigation
