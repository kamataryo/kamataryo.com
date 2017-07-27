import * as React from 'react'
import { Provider } from 'react-redux'
import rootStore from '../store'

const Routes = () => {
  return (
    <Provider store={ rootStore }>
      <div>
        { /* <meta charset={ 'UTF-8' } /> Why type error? */ }
        <meta name={ 'viewport' } content={ 'width=device-width, initial-scale=1.0' } />
        <meta httpEquiv={ 'X-UA-Compatible' } content={ 'ie=edge' } />
        <title>Kamata Ryo | Web Developer</title>
      </div>
    </Provider>
  )
}
export default Routes
