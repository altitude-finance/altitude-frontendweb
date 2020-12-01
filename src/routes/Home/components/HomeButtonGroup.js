import { Button } from '@material-ui/core'
import { FlexCenter } from 'components/FlexCenter'
import React from 'react'
import { useHistory } from 'react-router-dom'
import OpenInNewIcon from '@material-ui/icons/OpenInNew'; // External Links

export const HomeButtonGroup = () => {
  const history = useHistory()

  return (
    <FlexCenter mt={1}>
      {/* <Button onClick={() => history.push("/docs")}>Docs</Button> */}
      <Button 
        href="https://assets.altitude.finance/static/files/Altitude_Finance_Whitepaper.pdf"
        target="_blank"
        variant="contained"
        color="primary"
        style={{color: 'white'}}
        endIcon={<OpenInNewIcon />}
      >
        Whitepaper
      </Button>
    </FlexCenter>
  )
}
