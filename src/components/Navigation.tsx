import * as React from 'react'
import * as classnames from 'classnames'
import ActiveLink from '../containers/ActiveLink'

interface OwnProps {
  prefix?: string,
}

export default class Navigation extends React.Component<OwnProps, {}> {

  public render() {
    const { prefix } = this.props

    const navClass = classnames({
      navigation               : true,
      [`navigation-${prefix}`] : true,
    })

    return (
      <nav className={ navClass } role={ 'nav' }>
        <ul className={ 'nav-items' }>
          <li className={ 'nav-item' }><ActiveLink to={ '/' }>{ 'Home' }</ActiveLink></li>
          <li className={ 'nav-item' }><ActiveLink to={ '/about' }>{ 'About' }</ActiveLink></li>
          <li className={ 'nav-item' }><ActiveLink to={ '/skills' }>{ 'Skills' }</ActiveLink></li>
          { /* <li className={ 'nav-item' }><ActiveLink to={ '/speaking' }>{ 'Speaking' }</ActiveLink></li> */ }
          <li className={ 'nav-item' }><ActiveLink to={ '/contact' }>{ 'Contact' }</ActiveLink></li>
        </ul>
      </nav>
    )
  }
}
