import { Button } from '@material-ui/core'
import { FlexCenter } from 'components/FlexCenter'
import React from 'react'
import { useHistory } from 'react-router-dom'

export const HomeButtonGroup = () => {
  const history = useHistory()

  return (
    <FlexCenter>
      <Button onClick={() => history.push("/docs")}>Docs</Button>
      <Button href="">Read More</Button>
    </FlexCenter>
  )
}
