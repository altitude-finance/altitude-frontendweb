import { Box, FormControl, InputLabel, makeStyles, MenuItem, Select } from '@material-ui/core'
import DocsRouteMap from 'constants/DocsRouteMap'
import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  nestedMenuItem: {
    marginLeft: theme.spacing(4)
  },
  headerItem: {
    backgroundColor: theme.palette.primary
  }
}))

export const DocsMenu = () => {
  const classes = useStyles()
  const history = useHistory()
  const location = useLocation()
  // const [page, setPage] = useState('/docs')

  const handleChange = (event) => {
    const { value } = event.target
    // setPage(value)
    history.push(value)
  }

  return (
    <Box mb={1} display="flex">
      <FormControl variant="outlined" fullWidth>
        {/* <InputLabel id="docs-page-label">Docs</InputLabel> */}
        <Select
          // labelId="docs-page-label"
          id="docs-mobile-menu"
          variant="outlined"
          defaultValue="/docs"
          value={location.pathname}
          onChange={handleChange}
          fullWidth
          // label="Age"
        >
          {[...DocsRouteMap.active].map((route, i) => {
            if (route.items) {
              return [
                <MenuItem
                  key={i}
                  
                  value={route.items[0].path}
                  className={classes.headerItem}
                  classes={{selected: classes.headerItem}}
                >
                  <b>{route.title}</b>
                </MenuItem>,
                route.items.map((subroute, j) => (
                  <MenuItem
                    key={`${i}-${j}`}
                    value={subroute.path}
                    // className={classes.nestedMenuItem}
                  >
                    {subroute.title}
                  </MenuItem>
                ))
              ]
            } else {
              return (
                <MenuItem
                  key={i}
                  value={route.path}
                >
                  <b>{route.title}</b>
                </MenuItem>
              )
            }
          })}
        </Select>
      </FormControl>
    </Box>
  )
}
