import { Button } from '@material-ui/core'
import { useSnackbar } from 'notistack';
import React, { useCallback, useEffect, useState } from 'react'

export const useNotifications = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  const notify = (message, variant="default", txHash=undefined) => {
    enqueueSnackbar(message, {
      variant,
      autoHideDuration: 6000,
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'right',
      },
      action: (key) => (
        <>
          {txHash && (
            <Button
              href={`https://etherscan.io/tx/${txHash}`}
              target="_blank"
            >
              View
            </Button>
          )}
            <Button
              onClick={() => closeSnackbar(key)}
            >
              Dismiss
            </Button>
        </>
      )
    })
  }

  return notify
}
