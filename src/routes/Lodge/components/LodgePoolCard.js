import React, { useState } from 'react'
import { Button, Typography, Grid, Paper, Box } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles';
import { TextDecoration } from 'components/TextDecoration'
import { makeStyles } from '@material-ui/core/styles'
import { FlexCenter } from 'components/FlexCenter'
import OpenInNewIcon from '@material-ui/icons/OpenInNew'
import { ConnectView } from 'components/ConnectView';
import { useSlopes } from 'hooks/useSlopes';
import { ValueDisplay } from 'components/ValueDisplay';

const useStyles = makeStyles({
	// media: {
	//   height: 64,
	//   width: 64,
	// },
	// buttonPadding: {
	//   padding: '5px',
	// }
});

export const LodgePoolCard = () => {

	const classes = useStyles();
	const [value, setValue] = useState('1');
	const { active } = useSlopes()

	const handleModal = () => {

	}

	return (
		<Paper variant="outlined">
			<Box p={2}>
				<Typography variant="h4" align="center">
					<b>The Lodge</b>
				</Typography>
				<TextDecoration />

				<ConnectView>
					{!active ? (
						<Typography
							variant="body1"
							color="textSecondary"
							align="center"
						>
							Waiting for LGE Completion
						</Typography>
					) : (
						<Box>
							<Grid container>
								<Grid item xs={12} md={6}>
									<ValueDisplay
										title="Currently Equipped Board"
										info="Golden"
									/>
								</Grid>
								<Grid item xs={12} md={6}>
									<ValueDisplay
										title="Total Boost"
										info="50%"
									/>
								</Grid>
							</Grid>
							<Button
								onClick={handleModal}
								color="primary"
								variant="contained"
								fullWidth
							>
								Deposit/Withdraw NFTs for Boost
							</Button>
							<Button
								href="https://opensea.io/"
								target="_blank"
								color="default"
								variant="contained"
								endIcon={<OpenInNewIcon />}
								fullWidth
							>
								View Lodge NFTs on OpenSea
							</Button>
						</Box>
					)}
					
				</ConnectView>
			</Box>
		</Paper>
	)
}
