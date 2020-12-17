import React, { useState } from 'react'
import { Button, Typography, Grid, Paper, Box } from '@material-ui/core'
import { TextDecoration } from 'components/TextDecoration'
import { makeStyles } from '@material-ui/core/styles'
import { useAvalanche } from 'hooks/useAvalanche'
import { ConnectView } from 'components/ConnectView'

const useStyles = makeStyles((theme) => ({
	// media: {
	//   height: 64,
	//   width: 64,
	// },
	// buttonPadding: {
	//   padding: '5px',
	// }
}))

export const AvalanchePoolCard = () => {
	const classes = useStyles()

	const { active } = useAvalanche()

	return (
		<Paper variant="outlined">
			<Box p={2}>
				<Typography variant="h4" align="center">
					<b>Avalanche</b>
				</Typography>
				<TextDecoration />

				<ConnectView>
					{!active ? (
						<Typography
							variant="body1"
							color="textSecondary"
							align="center"
						>
							Waiting for Accumulation Completion
						</Typography>
					) : (
						<Box></Box>
					)}
				</ConnectView>
			</Box>
		</Paper>
	)
}
