import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { TopBar } from 'components/TopBar'
import { Footer } from 'components/Footer'
import { Home } from './Home'
import { Slopes } from './Slopes'
import { Avalanche } from './Avalanche'
import { Dashboard } from './Dashboard'
import { Docs } from './Docs'
import { NoMatch } from './NoMatch'
import { Account } from './Account'
import { Legal } from './Legal'
import { Lodge } from './Lodge'
import { Box } from '@material-ui/core'

const Routes = () => {
  return (
    // <Box display="flex" flexDirection="column" p={3} flexGrow={1}>
    <Router>
      <TopBar />

      <Switch>
        {/* Alphabetical order with / first and nothing last as catch all */}
        <Route exact path="/" component={Home} />
        <Route path="/account" component={Account} />
        <Route path="/avalanche" component={Avalanche} />
        <Route path="/docs/:folderId/:docId" component={Docs} />
        <Route path="/docs/:docId" component={Docs} />
        <Route path="/docs" component={Docs} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/legal" component={Legal} />
        <Route path="/lodge" component={Lodge} />
        <Route path="/slopes" component={Slopes} />
        
        <Route component={NoMatch} />
      </Switch>

      <Footer />
    </Router>
    // </Box>
  )
}

export default Routes
