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
        link="https://twitter.com/"
      >
        <TwitterIcon />
      </SocialButton>
      <SocialButton
        name="telegram"
        link="https://telegram.org/"
      >
        <TelegramIcon />
      </SocialButton>
      <SocialButton
        name="github"
        link="https://github.com/"
      >
        <FaGithub />
      </SocialButton>
      <SocialButton
        name="medium"
        link="https://medium.com/"
      >
        <FaMediumM />
      </SocialButton>
      
      <SocialButton
        name="discord"
        link="https://discord.com/"
      >
        <FaDiscord />
      </SocialButton>
    </Grid>
  )
}
