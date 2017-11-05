import * as React from 'react'
import { Provider } from 'react-redux'
import rootStore, { history } from '../store'
import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import Header from '../components/Header'
import HomeView from './HomeView'
import AboutView from './AboutView'
import PublicationsView from './publications-view'
import SkillsView from './SkillsView'
import ContactView from './ContactView'
import CatView from './cat-view'
import Footer from '../components/Footer'
import { Justify } from '../styled/common'

const Routes = () => {
  return (
    <Provider store={ rootStore }>
      <ConnectedRouter history={ history }>
        <Justify>
        <div>
          <Header />
          <main className={ 'container' }>
            <Route path={ '/' } component={ HomeView } exact />
            <Route path={ '/about' } component={ AboutView } exact />
            <Route path={ '/skills' } component={ SkillsView } exact />
            <Route path={ '/cat' } component={ CatView } exact />
            <Route path={ '/publications' } component={ PublicationsView } exact />
            <Route path={ '/contact' } component={ ContactView } exact />
          </main>
          <Footer />
          </div>
        </Justify>
      </ConnectedRouter>
    </Provider>
  )
}
export default Routes
