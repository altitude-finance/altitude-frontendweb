import { FeatureGatedView } from 'components/FeatureGatedView'
import { HeaderView } from 'components/HeaderView'
import React from 'react'
import { SlopesStats } from './components/SlopesStats'
import { SlopesPoolCard } from './components/SlopesPoolCard'
import { Box, Container, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import SlopesMap from 'constants/SlopesMap'
import { useSlopes } from 'hooks/useSlopes'
import { useWallet } from 'use-wallet'

const useStyles = makeStyles({
	containerPadding: {
		padding: '10px',
	}
});

export const Slopes = () => {
	const { chainId } = useWallet()
	const classes = useStyles()
	const { active, stats, lpPool } = useSlopes()

	return (
		<HeaderView title="Slopes">
			<Container maxWidth="md">
				<SlopesStats stats={stats} />
				
				<Box py={4}>
					<Grid
						container
						spacing={4}
						direction="row"
						justify="center"
						alignItems="center"
					>
						{[...SlopesMap(chainId || 1).pools].map((slope, i) => (
							<Grid item xs={12} md={6}>
								<SlopesPoolCard
									key={i}
									active={active}
									slope={slope}
									stats={stats && stats[i] ? stats[i] : {}}
								/>
							</Grid>
						))}
					</Grid>
				</Box>
			</Container>
		</HeaderView>
	)
}
