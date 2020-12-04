import { Grid, makeStyles, Typography } from '@material-ui/core'
import { ColumnView } from 'components/ColumnView'
import { DisplayView } from 'components/DisplayView'
import { FlexCenter } from 'components/FlexCenter'
import { TextDecoration } from 'components/TextDecoration'
import React from 'react'

const useStyles = makeStyles({
  bigSign: {
    height: 125,
    width: 386,
  },
})

export const HeaderView = ({
  title,
  align = 'center',
  children,
  headerImage,
}) => {
  const classes = useStyles()
  // const classes = useStl
  return (
    <DisplayView>
      {/* <Grid item style={{alignSelf: 'center', justifySelf: ''}}> */}
      <FlexCenter
        my={2}
        flexDirection="column"
        alignSelf="center"
        // justifySelf="start"
      >
        <Typography variant="h4" align={align}>
          <b>{title}</b>
        </Typography>
        <TextDecoration />
      </FlexCenter>
      {/* </Grid> */}
      <ColumnView height="100%" flexGrow={1}>
        {children}
      </ColumnView>
    </DisplayView>
  )
}
