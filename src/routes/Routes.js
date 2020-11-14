import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { TopBar } from 'components/TopBar'
import { Footer } from 'components/Footer'
import { Home } from './Home'
import { Slopes } from './Slopes'
import { Avalanche } from './Avalanche'
import { Leaderboards } from './Leaderboards'
import { About } from './About'
import { Docs } from './Docs'
import { NoMatch } from './NoMatch'
import { Account } from './Account'

const Routes = () => {
  return (
    <Router>
      <TopBar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/account" component={Account} />
        <Route path="/avalanche" component={Avalanche} />
        <Route path="/slopes" component={Slopes} />
        <Route path="/slopes/:slopeId" component={() => {}} /> {/* If we decide to subroute, put them all here */}
        <Route path="/leaderboards" component={Leaderboards} />
        <Route path="/docs" component={Docs} />
        
        <Route component={NoMatch} />
      </Switch>

      <Footer />
    </Router>
  )
}

export default Routes
