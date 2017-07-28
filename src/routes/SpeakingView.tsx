import * as React from 'react'
import Meta from '../components/Meta'
import SpeakingContent from '../components/contents/Speaking'

const SpeakingView = () => {
  return (
    <div id={ 'speaking' } className={ 'speaking' }>

      <Meta title={ 'Speaking' } type={ 'article' } />
      <SpeakingContent />
    </div>
  )
}

export default SpeakingView
