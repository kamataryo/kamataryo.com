import * as React from 'react'
import { Provider } from 'react-redux'
import rootStore, { history } from '../store'
import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import Header from '../components/Header'
import HomeView from '../routes/HomeView'
import AboutView from '../routes/AboutView'
import SkillsView from '../routes/SkillsView'
import SpeakingView from '../routes/SpeakingView'
import ContactView from '../routes/ContactView'
import Footer from '../components/Footer'

const Routes = () => {
  return (
    <Provider store={ rootStore }>
      <ConnectedRouter history={ history }>
        <div>
          <Header />
          <main className={ 'container' }>
            <Route path={ '/' } component={ HomeView } exact />
            <Route path={ '/about' } component={ AboutView } exact />
            <Route path={ '/skills' } component={ SkillsView } exact />
            <Route path={ '/speaking' } component={ SpeakingView } exact />
            <Route path={ '/contact' } component={ ContactView } exact />
          </main>
          <Footer />
        </div>
      </ConnectedRouter>
    </Provider>
  )
}
export default Routes
