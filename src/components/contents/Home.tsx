import * as React from 'react'
import styled from 'styled-components'

const IconClip = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`

const HomeContent = () => {
    return (
      <div className={ 'content home-content' }>
        <h2 className={ 'page-title' }>{ 'Home' }</h2>
        <IconClip src={ './icon.png' } alt={ 'kamataryo' }/>
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
