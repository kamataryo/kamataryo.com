import * as React from 'react'
import Meta from '../components/Meta'
import PublicationsContent from '../components/contents/publications'

const PublicationsView = () => {
  return (
    <div id={ 'publication' }>

      <Meta title={ 'Publications' } type={ 'article' } />
      <PublicationsContent />
    </div>
  )
}

export default PublicationsView
