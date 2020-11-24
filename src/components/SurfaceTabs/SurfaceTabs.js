import { makeStyles, Paper, Tab, Tabs } from '@material-ui/core'
import React, { useState } from 'react'
import { TabPanel } from './components/TabPanel'

const useStyles = makeStyles((theme) => ({
  surface: {
    width: "100%"
  }
}))

export const SurfaceTabs = ({
  tabs=[],
  defaultTab=0,
  children
}) => {
  const classes = useStyles()
  const [tab, setTab] = useState(defaultTab)



  return (
    <Paper className={classes.surface}>
      <Tabs
        value={tab}
        onChange={(_, newValue) => setTab(newValue)}
        centered
      >
        {tabs.map((label, i) => (
          <Tab 
            key={i}
            label={label}

          />
        ))}
      </Tabs>
      {children.map((child, i) => (
        <TabPanel 
          key={i}
          index={i}
          value={tab}
        >
          {child}
        </TabPanel>
      ))}
    </Paper>
  )
}
