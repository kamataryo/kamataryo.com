import * as React from 'react'

const HomeContent = () => {
    return (
      <div className={ 'content home-content' }>
        <h2 className={ 'page-title' }>{ 'Home' }</h2>
        <p>{ 'This website is Kamata Ryo\'s portfolio.' }</p>
        <img src={ './icon.png' } alt={ 'kamataryo' }/>
        <dl>
          <dt>{ 'name' }</dt>
          <dd>{ 'Kamata Ryo' }</dd>
        </dl>
        <dl>
          <dt>{ 'occupation' }</dt>
          <dd>{ 'web developer' }</dd>
        </dl>
      </div>
    )
}

export default HomeContent
