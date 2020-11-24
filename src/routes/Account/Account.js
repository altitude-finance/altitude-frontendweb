import { HeaderView } from 'components/HeaderView'
import React from 'react'
import { useWallet } from 'use-wallet'
import { NoAccount } from './components/NoAccount'
import { ActiveAccount } from './components/ActiveAccount'

export const Account = () => {
  const { account } = useWallet()

  return (
    <HeaderView title="Account">
      {account ? (
        <ActiveAccount />
      ) : (
        <NoAccount />
      )}
    </HeaderView>
  )
}
