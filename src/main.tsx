import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { AppContainer as HMRContainer } from 'react-hot-loader'
import App from './routes'

const render = (Component: () => React.ReactElement<{}>, ELEM: HTMLElement|null) => (
  ReactDOM.render(
    <HMRContainer>
      <Component />
    </HMRContainer>,
    ELEM,
  )
)

const BODY = document.getElementById('app')

// Go!
render(App, BODY)

// Hot Module Replacement settings
if (module.hot) {
  module.hot.accept('./routes', () => {
    const NextApp = require('./routes').default
    render(NextApp, BODY)
  })
}
