import { Grid } from '@material-ui/core'
import React from 'react'
import TwitterIcon from '@material-ui/icons/Twitter'
import TelegramIcon from '@material-ui/icons/Telegram'
import { FaDiscord, FaMediumM, FaGithub } from "react-icons/fa"
import { SocialButton } from './components/SocialButton'
import { DISCORD_URL, GITHUB_URL, MEDIUM_URL, TELEGRAM_URL, TWITTER_URL } from 'constants/Links'

export const SocialButtonGroup = () => {
  return (
    <Grid container direction="row" justify="center">
      <SocialButton
        name="twitter"
        link={TWITTER_URL}
      >
        <TwitterIcon />
      </SocialButton>
      <SocialButton
        name="github"
        link={GITHUB_URL}
      >
        <FaGithub />
      </SocialButton>
      <SocialButton
        name="medium"
        link={MEDIUM_URL}
      >
        <FaMediumM />
      </SocialButton>
      <SocialButton
        name="discord"
        link={DISCORD_URL}
      >
        <FaDiscord />
      </SocialButton>
      <SocialButton
        name="telegram"
        link={TELEGRAM_URL}
      >
        <TelegramIcon />
      </SocialButton>
    </Grid>
  )
}
