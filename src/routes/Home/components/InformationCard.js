import { Box, Button, Grid, Typography } from '@material-ui/core'
import { ColumnView } from 'components/ColumnView'
import { Card } from 'components/Card'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { FlexCenter } from 'components/FlexCenter'
import OpenInNewIcon from '@material-ui/icons/OpenInNew'
import { WHITEPAPER_URL } from 'constants/Links'
import DescriptionIcon from '@material-ui/icons/Description';

export const InformationCard = () => {
  const history = useHistory()

  return (
    <Box my={4}>
      <Card title="Learn More">
        <Box mb={1}>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <ColumnView>
                <Typography variant="body1" align="center" gutterBottom>See our Documentation</Typography>
                <FlexCenter>
                  <Button
                    onClick={() => history.push('/docs')}
                    variant="contained"
                    endIcon={<DescriptionIcon />}
                  >
                    Documentation
                  </Button>
                </FlexCenter>
              </ColumnView>
            </Grid>
            <Grid item xs={12} sm={6}>
              <ColumnView>
                <Typography variant="body1" align="center" gutterBottom>Read the Whitepaper</Typography>
                <FlexCenter>
                  <Button
                    href={WHITEPAPER_URL}
                    target="_blank"
                    variant="contained"
                    endIcon={<OpenInNewIcon />}
                  >
                    Whitepaper
                  </Button>
                </FlexCenter>
              </ColumnView>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </Box>
  )
}
