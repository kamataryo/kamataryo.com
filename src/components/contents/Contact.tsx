import * as React from 'react'

const ContactContent = () => {
    return (
      <div className={ 'content contact-content' }>
        <h2 className={ 'page-title' }>{ 'contact' }</h2>
        <p className={ 'article-content' }>
          { 'feel free to contact.' }
          <ul className={ 'sns-kists' }>
            <li className={ 'sns-item' }>
              <a href={ 'https://github.com/kamataryo' }>{ 'GitHub' }</a>
            </li>
            <li className={ 'sns-item' }>
              <a href={ 'https://twitter.com/KamataRyo_t' }>{ 'Twitter' }</a>
            </li>
          </ul>
        </p>
      </div>
    )
}

export default ContactContent
