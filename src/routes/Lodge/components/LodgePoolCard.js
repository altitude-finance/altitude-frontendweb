import React from 'react'
import { Button, Typography, Grid, Paper, Box } from '@material-ui/core'
import { TextDecoration } from 'components/TextDecoration'
import OpenInNewIcon from '@material-ui/icons/OpenInNew'
import { ConnectView } from 'components/ConnectView'
import { ValueDisplay } from 'components/ValueDisplay'
import { useLoyalty } from 'hooks/useLoyalty'
import OPEN_SEA_STOREFRONT_URL from 'constants/Addresses'
import { useModal } from 'hooks/useModal'
import { LodgeDialog } from './LodgeDialog'

export const LodgePoolCard = ({ board, boost }) => {
	const { active } = useLoyalty()

	const [handleModal] =  useModal(<LodgeDialog />)

	return (
		<Paper variant="outlined">
			<Box p={2}>
				<Typography variant="h4" align="center">
					<b>The Lodge</b>
				</Typography>
				<TextDecoration />
				<Typography 
					variant="subtitle1" 
					align="center" 
					gutterBottom
				>
					Earn Boost by depositing Altitude Lodge NFTs 
				</Typography>

				<ConnectView>
					{active ? (
						<Typography
							variant="body1"
							color="textSecondary"
							align="center"
						>
							Waiting for LGE Completion
						</Typography>
					) : (
						<Box>
							<Box mb={2}>
								<Grid container>
									<Grid item xs={12} md={6}>
										<ValueDisplay
											title="Currently Equipped Board"
											info={board}
										/>
									</Grid>
									<Grid item xs={12} md={6}>
										<ValueDisplay
											title="Total Boost"
											info={boost}
										/>
									</Grid>
								</Grid>
							</Box>
							<Box mb={1}>
							<Button
								onClick={handleModal}
								color="primary"
								variant="contained"
								fullWidth
							>
								Deposit / Withdraw
							</Button>
							</Box>
							
							<Button
								href={OPEN_SEA_STOREFRONT_URL}
								target="_blank"
								color="default"
								variant="contained"
								endIcon={<OpenInNewIcon />}
								fullWidth
							>
								View Lodge on OpenSea
							</Button>
						</Box>
					)}
					
				</ConnectView>
			</Box>
		</Paper>
	)
}
