import { HeaderView } from 'components/HeaderView'
import React from 'react'
import { SlopesStats } from './components/SlopesStats'
import { SlopesPoolCard } from './components/SlopesPoolCard'
import { Box, Container, Grid } from '@material-ui/core'
import SlopesMap from 'constants/SlopesMap'
import { useSlopes } from 'hooks/useSlopes'
import { useNetwork } from 'hooks/useNetwork'

export const Slopes = () => {
	const { chainId } = useNetwork()
	const { active, stats } = useSlopes()

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
						{[...SlopesMap(chainId).pools].map((slope, i) => (
							<Grid item key={i} xs={12} md={6}>
								<SlopesPoolCard
									active={active}
									slope={slope}
									pool={stats  ? stats[i] : undefined}
								/>
							</Grid>
						))}
					</Grid>
				</Box>
			</Container>
		</HeaderView>
	)
}
