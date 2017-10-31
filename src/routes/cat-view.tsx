import * as React from 'react'
import Meta from '../components/Meta'
import CatContent from '../components/contents/cat'

const CatView = () => {
  return (
    <div id={ 'cat' }>

      <Meta title={ 'Cat' } type={ 'article' } />
      <CatContent />
    </div>
  )
}

export default CatView
