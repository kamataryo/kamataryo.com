import * as React from 'react'
import Meta from '../components/Meta'
import SkillsContent from '../components/contents/Skills'

const SkillsView = () => {
  return (
    <div id={ 'skills' } className={ 'skills' }>

      <Meta title={ 'Skills' } type={ 'article' } />
      <SkillsContent />
    </div>
  )
}

export default SkillsView
