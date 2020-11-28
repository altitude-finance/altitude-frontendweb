import { Grid, makeStyles, Typography } from '@material-ui/core'
import { ColumnView } from 'components/ColumnView'
import { DisplayView } from 'components/DisplayView'
import { FlexCenter } from 'components/FlexCenter'
import { TextDecoration } from 'components/TextDecoration'
import React from 'react'

// const useStyles = makeStyles((theme) => ({
//   header: {
//     alignSelf: 'center'
//   }
// }))

export const HeaderView = ({
  title,
  align="center",
  children
}) => {
  // const classes = useStl
  return (
    <DisplayView justify="flex-start">
      <Grid item style={{alignSelf: 'center'}}>
        <ColumnView my={3} alignItems="center">
          <Typography variant="h4" align={align}><b>{title}</b></Typography>
          <TextDecoration />
        </ColumnView>
      </Grid>
      <Grid item>
        <ColumnView mx={3} mb={3}>
          {children}
        </ColumnView>
      </Grid>
    </DisplayView>
  )
}
