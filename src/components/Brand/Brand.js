import React from 'react'
// import { Box, Grid, makeStyles, Typography } from '@material-ui/core'
import AltitudeBrand from 'assets/img/altitude-brand.png'
import AltitudeBrandVertical from 'assets/img/altitude-brand-vertical.png'
import AltitudeBrandLight from 'assets/img/altitude-brand-light.png'
import AltitudeBrandLightVertical from 'assets/img/altitude-brand-light-vertical.png'
import { useTheme } from 'hooks/useTheme'

// const useStyles = makeStyles((theme) => ({
//   image: {
//     // marginRight: theme.spacing(1),
//     // marginLeft: theme.spacing(1),
//     // alignItems: 'center'
//   }
// }))

export const Brand = ({ 
  vertical=false, 
  size=64,
  dark=true // override for dark text, needed for topbar
}) => {
  // const classes = useStyles()
  const { colorMode } = useTheme()

  return (
    <img 
      src={colorMode === "dark" && dark
        ? vertical
          ? AltitudeBrandLightVertical
          : AltitudeBrandLight
        : vertical 
          ? AltitudeBrandVertical 
          : AltitudeBrand
      }
      style={vertical ? { width: `${size}px` } : { height: `${size}px` }}
      // className={classes.image}
      alt="altitude-brand"
    />
  )
}
