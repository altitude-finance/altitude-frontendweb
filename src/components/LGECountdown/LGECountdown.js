import { Grid } from '@material-ui/core'
import React from 'react'
import FundClockProgress from 'react-fundraising-countdown';
import { useTheme } from '@material-ui/core/styles';

const milestonesData = [{
    text: 'PWDR Making LGE Start',
    cap: 0
}, {
    text: 'Minimum Goal 500 ETH',
    cap: 500
}, {
    text: 'Maximum Goal 2,000 ETH',
    cap: 2000
},];

export const LGECountdown = () => {
    const theme = useTheme();
    return (
      <Grid container direction="row" justify="center">
          <FundClockProgress
                campaignEndDate={'2020-12-04T18:00:00Z'}
                currentFund={0}
                hardcap={2000}
                icoClockStyle={{ backgroundColor: "#29b6f6" }}
                icoClockFlipStyle={{ backgroundColor: "#29b6f6" }}
                milestones={milestonesData}
                icoProgress={true}
                progressColor={'#29b6f6'}
                unitLabelContainerStyle={{ backgroundColor: theme.palette.secondary.main }}
                unitLabelTextStyle={{ color: 'white', fontWeight:'bold', fontSize:'1.1em' }}
          />
    </Grid>
  )
}
