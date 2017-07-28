import * as React from 'react'
import Meta from '../components/Meta'
import HomeContents from '../components/contents/Home'

const HomeView = () => {
  return (
    <div id={ 'home' } className={ 'home' }>
      <Meta />
      <HomeContents />
    </div>
  )
}

export default HomeView
