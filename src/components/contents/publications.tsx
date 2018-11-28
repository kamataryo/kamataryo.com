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
        { 'Fisheries Science 77 41-48 2011' }<br />
        <a href={ 'https://link.springer.com/article/10.1007/s12562-010-0305-8' }>
          { 'https://link.springer.com/article/10.1007/s12562-010-0305-8' }
        </a>
      </p>
      <h2>{ 'Speakings' }</h2>
      <p>
        { 'CI支援サービスから始めるWoedPressプラグイン・テーマ開発' }<br />
        <Myself>{ '鎌田 遼' }</Myself><br />
        { 'WordCamp Kansai 2016' }<br />
        <a href={ 'https://2016.kansai.wordcamp.org/session/start-to-ci/' }>
          { 'https://2016.kansai.wordcamp.org/session/start-to-ci/' }
        </a>
      </p>
      <p>
        { '公務員を辞めた私がオープンソースを志向した理由' }<br />
        <Myself>{ '鎌田 遼' }</Myself><br />
        { 'WordCamp Toyko 2016' }<br />
        <a href={ 'https://2016.tokyo.wordcamp.org/session/how-i-move-to-floss-20min/' }>
          { 'https://2016.tokyo.wordcamp.org/session/how-i-move-to-floss-20min/' }
        </a>
      </p>
      <p>
        { 'オープンプラットフォームによる日本の古地図オンラインの構築' }<br />
        { '矢野 桂司, ' }<Myself>{ '鎌田 遼' }</Myself><br />
        { '2017年度日本地理学会春季学術大会' }<br />
        <a href={ 'https://www.jstage.jst.go.jp/article/ajg/2017s/0/2017s_100313/_article/-char/ja/' }>
          { 'https://www.jstage.jst.go.jp/article/ajg/2017s/0/2017s_100313/_article/-char/ja/' }
        </a>
     </p>
      <p>
        { 'ジオリファレンスソフトウェア Map Warper の導入事例紹介' }<br />
        <Myself>{ '鎌田 遼' }</Myself>{ '・矢野 桂司' }<br />
        { 'FOSS4G 2017 KYOTO.KANSAI' }<br />
        <a href={ 'https://www.osgeo.jp/events/foss4g-2017/foss4g-2017-kyoto-kansai-coreday-timetable' }>
          { 'https://www.osgeo.jp/events/foss4g-2017/foss4g-2017-kyoto-kansai-coreday-timetable' }
        </a>
      </p>
      <p>
        { '日本版Map Warperの構築と活用' }<br />
        { '矢野桂司・' }<Myself>{ '鎌田遼' }</Myself><br />
        { 'GIS学会 2017年度学術研究発表大会' }<br />
        <a href={ 'http://www.gisa-japan.org/news/file/2017_abstract1029_ver.3.pdf' }>
          { 'http://www.gisa-japan.org/news/file/2017_abstract1029_ver.3.pdf' }
        </a>
      </p>
      <p>
        { '日本版Map Warperを用いた旧版地形図の公開' }<br />
        { 'GIS学会 2018年度学術研究発表大会' }<br />
        <a href={ 'http://www.gisa-japan.org/file/1012_poster.pdf' }>
          { 'http://www.gisa-japan.org/file/1012_poster.pdf' }
        </a>
      </p>
    </div>
  )
}

export default PublicationsContent
