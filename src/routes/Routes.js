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
import { Box } from '@material-ui/core'

const Routes = () => {
  return (
    // <Box display="flex" flexDirection="column" p={3} flexGrow={1}>
    <Router>
      <TopBar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/account" component={Account} />
        <Route path="/avalanche" component={Avalanche} />
        <Route path="/docs/:folderId/:docId" component={Docs} />
        <Route path="/docs/:docId" component={Docs} />
        <Route path="/docs" component={Docs} />
        <Route path="/leaderboards" component={Leaderboards} />
        <Route path="/slopes" component={Slopes} />
        
        <Route component={NoMatch} />
      </Switch>

      <Footer />
    </Router>
    // </Box>
  )
}

export default Routes
