import * as React from 'react'
import Rate from '../Rate'

interface Skill {
  name     : string,
  content? : string,
  rate     : 0|1|2|3|4|5
}

const skills: Skill[] = [
  {
    name: 'JavaScript',
    rate: 5,
  },
  {
    name: 'TypeScript',
    rate: 4,
  },
  {
    name: 'React',
    rate: 5,
  },
  {
    name: 'Redux',
    rate: 5,
  },
  {
    name: 'PHP',
    rate: 4,
  },
  {
    name: 'WordPress plugin development',
    rate: 4,
  },
  {
    name: 'WordPress theme development',
    rate: 3,
  },
  {
    name: 'C#',
    rate: 4,
  },
  {
    name: 'Clang',
    rate: 3,
  },
  {
    name: 'Python',
    rate: 3,
  },
  {
    name: 'Ruby',
    rate: 2,
  },
  {
    name: 'golang',
    rate: 1,
  },
]

const SkillsContent = () => {
    return (
      <div className={ 'content skills-content' }>
        <h2 className={ 'page-title' }>{ 'Skills' }</h2>
        <p className={ 'article-content' }>
        <ul>
        {
          skills.map((skill: any) => (
            <li>
              <p>{ `${skill.name}: ` }<Rate value={ skill.rate } /></p>
              { skill.content ? <p>{ skill.content }</p> : null }
            </li>
          ))
        }
        </ul>
        </p>
      </div>
    )
}

export default SkillsContent
