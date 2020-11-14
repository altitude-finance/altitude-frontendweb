import { Grid, IconButton } from '@material-ui/core'
import React from 'react'

export const SocialButton = ({
  name,
  link,
  children
}) => {
  return (
    <Grid item>
      <IconButton 
        aria-label={name}
        href={link}
        target="_blank"
        color="secondary"
      >
        {children}
      </IconButton>
    </Grid>
  )
}
