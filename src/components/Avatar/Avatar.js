import React from 'react'
import { useWallet } from 'use-wallet'
import md5 from 'md5'
import Gravatar from 'react-gravatar'

export const Avatar = ({
  size=64
}) => {
  const { account } = useWallet()

  return (
    <Gravatar 
      email={md5(account)}
      size={size} 
      style={{ borderRadius: size/2 }}
      default="retro"
      protocol="https://"
    />
  )
}
