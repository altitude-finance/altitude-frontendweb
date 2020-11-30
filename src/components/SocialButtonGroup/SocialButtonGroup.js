import { Grid } from '@material-ui/core'
import React from 'react'
import TwitterIcon from '@material-ui/icons/Twitter'
import TelegramIcon from '@material-ui/icons/Telegram'
import { FaDiscord, FaMediumM, FaGithub } from "react-icons/fa"
import { SocialButton } from './components/SocialButton'

export const SocialButtonGroup = () => {
  return (
    <Grid container direction="row" justify="center">
      <SocialButton
        name="twitter"
        link="https://twitter.com/AltitudeFi"
      >
        <TwitterIcon />
      </SocialButton>
      
      {/* <SocialButton
        name="github"
        link="https://github.com/altitude-finance"
      >
        <FaGithub />
      </SocialButton> */}
      <SocialButton
        name="medium"
        link="https://altitudefi.medium.com/"
      >
        <FaMediumM />
      </SocialButton>
      <SocialButton
        name="discord"
        link="https://discord.gg/FRwPgaP4ZC"
      >
        <FaDiscord />
      </SocialButton>
      <SocialButton
        name="telegram"
        link="https://t.me/AltitudeFi"
      >
        <TelegramIcon />
      </SocialButton>
      
    </Grid>
  )
}
