import * as React from 'react'
import { Helmet } from 'react-helmet'

interface OwnProps {
  title?         : string,
  type?          : 'website'|'article'|'book'|'business'|'place'|'product',
  site_name?     : string,
  description?   : string,
  url?           : string,
  image?         : string,
  faviconType?   : string,
  faviconHref?   : string,
  // fb?            : {
  //   admin?       : string,
  // },
  // twitter?       : {
  //   site?        : string,
  //   card?        : 'summary'|'summary large image'|'photo'|'gallery'|'app',
  //   creator?     : string,
  //   description? : string,
  //   img?         :  {
  //     src?       : string,
  //   },
  // },
}

const Meta = (props: OwnProps) => {

  const defaultProps: OwnProps = {
    title       : 'Web Developer',
    type        : 'website',
    site_name   : 'Kamata Ryo',
    description : 'Kamata Ryo\'s My portfolio',
    image       : 'http://example.com/ogp.png',
    faviconType : 'image/png',
    faviconHref: '/icon.png',
    // twitter     : {
    //   site: 'aaa',
    //   card: 'summary',
    // },
  }

  const fallbackedProps = {
    ...defaultProps,
    ...props,
    // fb      : {
    //   ...props.fb,
    //   ...defaultProps.fb,
    // },
    // twitter : {
    //   ...props.twitter,
    //   ...defaultProps.twitter,
    //   img: {
    //     ...(props.twitter ? props.twitter.img : {}),
    //     ...(defaultProps.twitter ? defaultProps.twitter.img : {}),
    //   },
    // },
  }

  const {
    title,
    type,
    site_name,
    description,
    url,
    image,
    faviconType,
    faviconHref,
    // fb,
    // twitter,
  } = fallbackedProps

  return (
    <Helmet>
      <meta charSet={ 'UTF-8' } />
      <meta name={ 'viewport' } content={ 'width=device-width, initial-scale=1.0' } />
      <meta httpEquiv={ 'X-UA-Compatible' } content={ 'ie=edge' } />
      <meta property={ 'og:title' } content={ `${site_name} | ${title}` } />
      <meta property={ 'og:type' } content={ type } />
      { url ? <meta property={ 'og:url' } content={ url } /> : null }
      <meta property={ 'og:image' } content={ image } />
      <meta property={ 'og:site_name' } content={ site_name } />
      <meta property={ 'og:description' } content={ description } />
      <link rel={ 'icon' } type={ faviconType } href={ faviconHref } />
      <title>{ `${site_name} | ${title}` }</title>
    </Helmet>
  )
}

export default Meta
