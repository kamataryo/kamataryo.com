import * as React from 'react'
import styled from 'styled-components'

const Myself = styled.span`
  text-decoration: underline;
`

const PublicationsContent = () => {
  return (
    <div>
      <h2>{ 'Speaking and Publications' }</h2>
      <h3>{ 'Academic papers peer reviewed' }</h3>
      <p>
        { 'Juveniles of threadsail filefish, Stephanolepis cirrhifer, can survive and grow by feeding on moon jellyfish Aurelia aurita' }<br />
        { 'Yuko Miyajima, Reiji Masuda, Ayako Kurihara, ' }<Myself>{ 'Ryo Kamata' }</Myself>{ ', Yoh Yamashita, Toshio Takeuchi' }<br />
        { 'Fisheries Science 77 41-48 2011' }
      </p>
    </div>
  )
}

export default PublicationsContent
