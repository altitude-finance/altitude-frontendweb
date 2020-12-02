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
        campaignEndDate={'2020-12-11T18:00:00Z'}
        currentFund={0}
        hardcap={2000}
        icoClockStyle={{ backgroundColor: theme.palette.primary.main }}
        icoClockFlipStyle={{ backgroundColor: theme.palette.primary.main }}
        icoClockFlipTextStyle={{color: 'white'}}
        milestones={milestonesData}
        icoProgress={true}
        // progressColor={'#29b6f6'}
        unitLabelContainerStyle={{ backgroundColor: theme.palette.secondary.main, minHeight: theme.typography.fontSize + 8 }}
        unitLabelTextStyle={{ color: theme.palette.background.default, fontWeight:'bold', fontSize: theme.typography.fontSize }}
      />
    </Grid>
  )
}
