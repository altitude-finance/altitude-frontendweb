import React, { useState } from 'react'
import { Button, Typography, Grid, Paper, Box } from '@material-ui/core'
import { TextDecoration } from 'components/TextDecoration'
import { makeStyles } from '@material-ui/core/styles'
import { useAvalanche } from 'hooks/useAvalanche'
import { ConnectView } from 'components/ConnectView'
import { useModal } from 'hooks/useModal'
import { AvalancheDialog } from './AvalancheDialog'
import { ValueDisplay } from 'components/ValueDisplay'
import { ColumnView } from 'components/ColumnView'
import OpenInNewIcon from '@material-ui/icons/OpenInNew'

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

	const { active, accumulating, stats } = useAvalanche()
	const [showModal] = useModal(<AvalancheDialog />)

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
						<Box>
							<Typography
								variant="body1"
								color="textSecondary"
								align="center"
							>
								Provide liquidity to earn daily PWDR rewards
							</Typography>
							<Box mb={2}>
								<Grid container>
									<Grid item xs={12} md={4}>
										<ValueDisplay
											title="Current Phase"
											info={accumulating ? "Accumulation" : "Distribution"}
										/>
									</Grid>
									<Grid item xs={12} md={4}>
										<ValueDisplay
											title="Total PWDR/ETH Staked"
											value={stats ? `${stats.totalStaked}` : "0"}
										/>
									</Grid>
									<Grid item xs={12} md={4}>
										<ValueDisplay
											title="Unstaking Fee"
											info={stats ? `${stats.unstakingFee/10}%` : "0%"}
										/>
									</Grid>
								</Grid>
							</Box>
							
							{!accumulating ? (
								<Box mb={2}>
									<Grid container>
										<Grid item xs={12} sm={4}>
											<ValueDisplay
												title="Payout Number"
												info={stats ? stats.payoutNumber : "0"}
											/>
										</Grid>
										<Grid item xs={12} sm={4}>
											<ValueDisplay
												title="Current Epoch PWDR Rewards"
												value={stats ? stats.currentEpochReward : "0"}
											/>
										</Grid>
										<Grid item xs={12} sm={4}>
											<ValueDisplay
												title="PWDR Rewards Per Payout"
												value={stats ? stats.currentEpochRewardPerDay : "0"}
											/>
										</Grid>
									</Grid>
								</Box>
							) : (
								<Box mb={2}>
									<Grid container justify="center">
										<Grid item xs={12}>
											<ValueDisplay
												title="APR"
												info={stats ? `${stats.apr}%` : '0'}
											/>
										</Grid>
										{/* <Grid item xs={12} md={6}>
											<ValueDisplay
												title="Total Boost"
												// info={stats ? `${stats.boost / 10}%` : "0%"}
											/>
										</Grid> */}
									</Grid>
								</Box>
							)}

							<Box mb={2}>
								<Grid container>
									<Grid item xs={12} md={6}>
										<ValueDisplay
											title="PWDR Price Ξ"
											value={stats ? stats.pwdrPrice : "0"}
										/>
									</Grid>
									{/* <Grid item xs={12} md={6}>
										<ValueDisplay
											title="Total Value Locked "
											value={stats ? stats.currentEpochReward : "0"}
										/>
									</Grid> */}
									<Grid item xs={12} md={6}>
										<ValueDisplay
											title="PWDR/ETH LP Price Ξ"
											value={stats ? stats.lpPrice : "0"}
										/>
									</Grid>
								</Grid>
							</Box>
							
							{/* <ColumnView> */}
							
							<Box mb={1}>
								<Button
									onClick={showModal}
									color="primary"
									variant="contained"
									fullWidth
								>
									Stake / Unstake
								</Button>
							</Box>
							<Box mb={1}>
								<Button
									href="https://info.uniswap.org/pair/0xfbA9C7a8eA50E825b2f567CAc91D8939A071aD48"
									target="_blank"
									variant="contained"
									color="default"
									endIcon={<OpenInNewIcon />}
									fullWidth
								>
									Add PWDR/ETH Liquidity
								</Button>
							</Box>
						</Box>
					)}
				</ConnectView>
			</Box>
		</Paper>
	)
}
