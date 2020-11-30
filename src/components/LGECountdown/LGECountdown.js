import { Grid } from '@material-ui/core'
import React from 'react'
import FlipClock from 'x-react-flipclock';
import FundClockProgress from 'react-fundraising-countdown';

const milestonesData = [{
    text: 'PWDR Making LGE Start',
    cap: 0
}, {
    text: 'Minimum Goal 500 ETH',
    cap: 500000
}, {
    text: 'Maximum Goal 2,000 ETH',
    cap: 2000000
},];

export const LGECountdown = () => {
  return (
      <Grid container direction="row" justify="center">
          <FundClockProgress
              icoProgress={false}
              campaignEndDate={'2020-12-04T18:00:00Z'}
              currentFund={0}
              softcap={500000}
              hardcap={2000000}
              icoClockStyle={{ backgroundColor: "#29b6f6" }}
              icoClockFlipStyle={{ backgroundColor: "#29b6f6" }}
              milestones={milestonesData}
          />
    </Grid>
  )
}
