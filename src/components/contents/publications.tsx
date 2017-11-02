import * as React from 'react'
import styled from 'styled-components'

const Myself = styled.span`
  text-decoration: underline;
`

const PublicationsContent = () => {
  return (
    <div>
      <h2>{ 'Academic papers peer reviewed' }</h2>
      <p>
        { 'Juveniles of threadsail filefish, Stephanolepis cirrhifer, can survive and grow by feeding on moon jellyfish Aurelia aurita' }<br />
        { 'Yuko Miyajima, Reiji Masuda, Ayako Kurihara, ' }<Myself>{ 'Ryo Kamata' }</Myself>{ ', Yoh Yamashita, Toshio Takeuchi' }<br />
        { 'Fisheries Science 77 41-48 2011' }
      </p>
      <h2>{ 'Speakings' }</h2>
      <p>{ 'オープンプラットフォームによる日本の古地図オンラインの構築' }<br />
         { '矢野 桂司, ' }<Myself>{ '鎌田 遼' }</Myself><br />
         { '2017年度日本地理学会春季学術大会' }
     </p>
      <p>{ 'ジオリファレンスソフトウェア Map Warper の導入事例紹介' }<br />
         <Myself>{ '鎌田 遼' }</Myself>{ '・矢野 桂司' }<br />
         { 'FOSS4G 2017 KYOTO.KANSAI' }
      </p>
      <p>
        { 'CI支援サービスから始めるWoedPressプラグイン・テーマ開発' }<br />
        <Myself>{ '鎌田 遼' }</Myself><br />
        { 'WordCamp Kansai 2016' }
      </p>
    </div>
  )
}

export default PublicationsContent
