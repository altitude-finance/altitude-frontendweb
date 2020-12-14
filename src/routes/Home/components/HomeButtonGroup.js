import { Button, useTheme } from '@material-ui/core'
import { FlexCenter } from 'components/FlexCenter'
import React from 'react'
import { useHistory } from 'react-router-dom'
import OpenInNewIcon from '@material-ui/icons/OpenInNew'; // External Links
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

export const HomeButtonGroup = ({active}) => {
  const theme = useTheme()
  const history = useHistory()

  return (
    <FlexCenter marginTop={1}>
      {/* <Button onClick={() => history.push("/docs")}>Docs</Button> */}
      <Button 
        href="https://assets.altitude.finance/static/files/Altitude_Finance_Whitepaper.pdf"
        target="_blank"
        variant="contained"
        style={{backgroundColor: 'white', color: 'black'}}
        endIcon={<OpenInNewIcon />}
      >
        Whitepaper
      </Button>
      {active && (
        <Button 
          onClick={() => history.push('/lge')}
          variant="contained"
          color="primary"
          style={{marginLeft: theme.spacing(1)}}
          endIcon={<ArrowForwardIcon />}
        >
          LGE
        </Button>
      )}
    </FlexCenter>
  )
}
