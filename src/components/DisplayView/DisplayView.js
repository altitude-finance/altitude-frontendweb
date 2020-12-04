import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import { SafeAreaView } from 'components/SafeAreaView'
import SnowStorm from 'react-snowstorm'
import { ColumnView } from 'components/ColumnView'
import { useTheme } from 'hooks/useTheme'

const useStyles = makeStyles((theme) => ({
  display: {
    minHeight: '100vh',
    height: '100%',
    width: '100%',
    spacing: 0
  }
}))

export const DisplayView = ({
  justify,
  align,
  children,
  ...props
}) => {
  const classes = useStyles()
  const { snowstorm } = useTheme()
  return (
    <SafeAreaView>
      {snowstorm && 
        <SnowStorm
          animationInterval={50}
          followMouse={false} 
          excludeMobile={false}
        />
      }
      
      <ColumnView 
        // direction="column"
        alignItems={align || undefined}
        justifyContent={justify || undefined}
        minHeight='100vh'
        height='100%'
        width='100%'
        spacing={0}
        // alignItems="center"
        // className={classes.display}
        // container
        {...props}
      >
        {children}
      </ColumnView>
    </SafeAreaView>
  )
}
