import * as React from 'react'
import * as classnames from 'classnames'
import ActiveLink from '../containers/ActiveLink'
import { Justify } from '../styled/common'
import styled from 'styled-components'

export const NavItems = styled.ul`
  list-style: none;
  display: flex;
`

export const NavItem = styled.li`
  margin: 0 .5em;
`

export interface OwnProps {
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
      <Justify>
        <nav className={ navClass } role={ 'nav' }>
          <NavItems className={ 'nav-items' }>
            <NavItem className={ 'nav-item' }><ActiveLink to={ '/' }>{ 'Home' }</ActiveLink></NavItem>
            <NavItem className={ 'nav-item' }><ActiveLink to={ '/about' }>{ 'About' }</ActiveLink></NavItem>
            <NavItem className={ 'nav-item' }><ActiveLink to={ '/skills' }>{ 'Skills' }</ActiveLink></NavItem>
            { /* <NavItem className={ 'nav-item' }><ActiveLink to={ '/speaking' }>{ 'Speaking' }</ActiveLink></NavItem> */ }
            <NavItem className={ 'nav-item' }><ActiveLink to={ '/contact' }>{ 'Contact' }</ActiveLink></NavItem>
          </NavItems>
        </nav>
      </Justify>
    )
  }
}
