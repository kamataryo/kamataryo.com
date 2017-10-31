import * as React from 'react'
import styled from 'styled-components'
import { Justify } from '../../styled/common'

const IconClip = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`

const HomeContent = () => {
    return (
      <div className={ 'content home-content' }>
        <h2 className={ 'page-title' }>{ 'Home' }</h2>
        <Justify>
          <IconClip src={ './icon.png' } alt={ 'kamataryo' }/>
          <div>
            <dl>
              <dt>{ 'name' }</dt>
              <dd>{ 'Kamata Ryo' }</dd>
            </dl>
            <dl>
              <dt>{ 'occupation' }</dt>
              <dd>{ 'web developer' }</dd>
            </dl>
          </div>
          </Justify>
      </div>
    )
}

export default HomeContent
