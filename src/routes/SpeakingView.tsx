import * as React from 'react'
import Meta from '../components/Meta'

const SpeakingView = () => {
  return (
    <div id={ 'speaking' }>

      <Meta title={ 'Speaking' } type={ 'article' } />
      <p>{ 'This is Speaking View.' }</p>
    </div>
  )
}

export default SpeakingView
