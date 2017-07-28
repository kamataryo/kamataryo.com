import * as React from 'react'
import Meta from '../components/Meta'

const ContactView = () => {
  return (
    <div id={ 'contact' }>

      <Meta title={ 'Contact' } type={ 'article' } />
      <p>{ 'This is Contact View.' }</p>
    </div>
  )
}

export default ContactView
