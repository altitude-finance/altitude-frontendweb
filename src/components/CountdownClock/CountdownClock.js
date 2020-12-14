import { useTheme } from '@material-ui/core'
import React from 'react'
import FundClockProgress from 'react-fundraising-countdown';

export const CountdownClock = ({endDate}) => {
  const theme = useTheme()

  return (
    <FundClockProgress
      campaignEndDate={endDate}
      icoClockStyle={{ backgroundColor: theme.palette.primary.main }}
      icoClockFlipStyle={{ backgroundColor: theme.palette.primary.main }}
      icoClockFlipTextStyle={{color: 'white'}}
      icoProgress={false}
      unitLabelContainerStyle={{ backgroundColor: theme.palette.secondary.main, minHeight: theme.typography.fontSize + 8 }}
      unitLabelTextStyle={{ color: theme.palette.background.default, fontWeight:'bold', fontSize: theme.typography.fontSize }}
    />
  )
}
