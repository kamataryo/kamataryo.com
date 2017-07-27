import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { AppContainer as HMRContainer } from 'react-hot-loader'
import Meta from './routes/Head'
import App from './routes/Body'

const render = (Component: () => React.ReactElement<{}>, ELEM: HTMLElement|null) => (
  ReactDOM.render(
    <HMRContainer>
      <Component />
    </HMRContainer>,
    ELEM,
  )
)

const hotReplace = (url: string, ELEM: HTMLElement|null) => {
  if (module.hot) {
    module.hot.accept(url, () => {
      const NextApp = require(url).default
      render(NextApp, ELEM)
    })
  }
}

const HEAD = document.getElementById('head')
const BODY = document.getElementById('app')

// Go!
render(Meta, HEAD)
render(App, BODY)

// Hot Module Replacement settings
hotReplace('./routes/Body', BODY)
hotReplace('./routes/Head', HEAD)
