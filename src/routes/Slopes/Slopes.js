import { HeaderView } from 'components/HeaderView'
import React from 'react'
import { SlopesStats } from './components/SlopesStats'
import { SlopesPoolCard } from './components/SlopesPoolCard'
import { Box, Container, Grid } from '@material-ui/core'
import SlopesMap from 'constants/SlopesMap'
import { useNetwork } from 'hooks/useNetwork'
import { UserStats } from './components/UserStats'

export const Slopes = () => {
	const { chainId } = useNetwork()

	return (
		<HeaderView title="Slopes">
			<Container maxWidth="md">
				<SlopesStats />
				<UserStats />
				
				<Box py={4}>
					<Grid
						container
						spacing={4}
						direction="row"
						justify="center"
						alignItems="center"
					>
						{[...SlopesMap(chainId).pools].slice(1).map((slope, i) => (
							
							<Grid item key={i} xs={12} md={6}>
								<SlopesPoolCard slope={slope} />
							</Grid>
						))}
					</Grid>
				</Box>
			</Container>
		</HeaderView>
	)
}
