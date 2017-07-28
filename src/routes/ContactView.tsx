import * as React from 'react'
import Meta from '../components/Meta'
import ContactContent from '../components/contents/Contact'

const ContactView = () => {
  return (
    <div id={ 'contact' } className={ 'contact' }>

      <Meta title={ 'Contact' } type={ 'article' } />
      <ContactContent />
    </div>
  )
}

export default ContactView
