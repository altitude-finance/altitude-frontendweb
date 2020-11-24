import { Button, Typography } from '@material-ui/core'
import { useHistory } from 'react-router-dom' 
import { DisplayView } from 'components/DisplayView'
import { Brand } from 'components/Brand'
import HomeIcon from '@material-ui/icons/Home'
import React from 'react'

export const NoMatch = () => {
  const history = useHistory()

  return (
    <DisplayView alignItems="center">
      <Brand size={100} />
      <Typography variant="h5">404</Typography>
      <Typography variant="subtitle2" color="textSecondary" gutterBottom>Slope Not Found</Typography>
      <Button
        startIcon={<HomeIcon />}
        color="primary"
        onClick={() => history.push('/')
      }>
        Go Back Home
      </Button>
    </DisplayView>
  )
}
