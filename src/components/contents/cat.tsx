import * as React from 'react'
import styled from 'styled-components'

const ClippedImage = styled.img`
  width: 400px;
  margin: 5px;
`

const BorrowedWord = styled.span`
  font-style: Italic;
`

const CenterifiedP = styled.p`
  text-align: center;
`

const CatContent = () => {
  return (
    <div>
      <h2>{ 'Cat' }</h2>
      <p>
        { 'Her name is ' }<BorrowedWord>{ 'Sumomo' }</BorrowedWord>{ ', which means plum in Japanese. She has joined to our family when June, 2017.' }
      </p>
      <CenterifiedP>
        <ClippedImage src={ './sumomo0001.jpg' } alt={ 'sumomo1' } />
        <ClippedImage src={ './sumomo0002.jpg' } alt={ 'sumomo2' } />
      </CenterifiedP>
      <p>{ 'She is rapidly growing!' }</p>
      <CenterifiedP>
        <ClippedImage src={ './sumomo0003.jpg' } alt={ 'sumomo3' } />
        <ClippedImage src={ './sumomo0004.jpg' } alt={ 'sumomo4' } />
      </CenterifiedP>
    </div>
  )
}

export default CatContent
