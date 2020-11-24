import { Box, makeStyles } from '@material-ui/core'
import React from 'react'

// const useStyles = makeStyles((theme) => ({
//   panel: {
//     width: "100%"
//   }
// }))

export const TabPanel = ({ index, value, children }) => {
  return (
    <Box
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box p={2}>
          {children}
        </Box>
      )}
    </Box>
  )
}
