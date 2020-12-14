import { FeatureGatedView } from 'components/FeatureGatedView'
import { HeaderView } from 'components/HeaderView'
import React from 'react'
import { SlopesHeader } from './components/SlopesHeader'
import { SlopesStats } from './components/SlopesStats'
import { SlopesPoolCard } from './components/SlopesPoolCard'
import { Box, Container, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import SlopesMap from 'constants/SlopesMap'

const useStyles = makeStyles({
	containerPadding: {
		padding: '10px',
	}
});

export const Slopes = () => {

	const classes = useStyles();

	return (
		<HeaderView title="Slopes">
			{/* <FeatureGatedView feature="LODGE"> */}
			<SlopesHeader />
			<SlopesStats />
			
			<Box py={4}>
			<Container maxWidth="lg">
				<Grid
					container
					spacing={4}
					direction="row"
					justify="center"
					alignItems="center"
				>
					{[...SlopesMap.pools].map((slope, i) => (
						<Grid item xs={12} md={6}>
							<SlopesPoolCard
								key={slope.pid}
								slopeName={slope.name}
								slopeSymbol={slope.symbol}
								// slopeLogo={slope.logo}
								// slopeStakedAmount={"10,200.00"}
								// pendingPwdrRewards={"12.04"}
								slopeSign={slope.sign}
								// slopeEntryFee={"5.00%"}
								// totalStakedAmount={"2,431,221.25"}
							/>
						</Grid>
					))}
				</Grid>
			</Container>
				</Box>
				{/* </FeatureGatedView> */}
		</HeaderView>
	)
}
