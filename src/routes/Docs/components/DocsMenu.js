import { Box, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

export const DocsMenu = () => {
  const history = useHistory()
  const [page, setPage] = useState(0)

  const handleChange = (event) => {
    const { value } = event.target
    setPage(value)
    switch (value) {
      case 0:
        history.push("/docs")
        break
      case 1:
        history.push("/docs`/slopes")
        break
      case 2:
        history.push("/docs/avalanche")
        break
      default:
        history.push("/docs")
    }
  }

  useEffect(() => {

  }, [])

  return (
    <Box mb={1}>
      <FormControl variant="outlined" fullWidth>
        {/* <InputLabel id="docs-page-label">Docs</InputLabel> */}
        <Select
          // labelId="docs-page-label"
          id="docs-mobile-menu"
          value={page}
          onChange={handleChange}
          // label="Age"
        >
          <MenuItem value={0}>Docs Home</MenuItem>
          <MenuItem value={1}>Slopes</MenuItem>
          <MenuItem value={2}>Avalanche</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}
