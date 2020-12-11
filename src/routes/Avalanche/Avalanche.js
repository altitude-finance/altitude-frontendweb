import { FeatureGatedView } from 'components/FeatureGatedView'
import { HeaderView } from 'components/HeaderView'
import React from 'react'
import { AvalancheHeader } from './components/AvalancheHeader'
import { AvalanchePoolCard } from './components/AvalanchePoolCard'
import { AvalancheStats } from './components/AvalancheStats'

import { Box, Container, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import SlopesMap from 'constants/SlopesMap'
import avalanche from 'assets/img/AvalancheBG_2000x600.png'

const useStyles = makeStyles({
    containerPadding: {
        padding: '10px',
	},

		fullHeight: {
		height: '100%'
	},

	avalancheBackground: {
		backgroundImage: `url(${avalanche})`,
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		height: "600px",
		position: "relative"
	}
});

export const Avalanche = () => {

	const classes = useStyles();

    return (

    <HeaderView title="Avalanche">
			<FeatureGatedView feature="AVALANCHE">
        <AvalancheHeader />
			<AvalancheStats />

			<Box py={4} className={classes.avalancheBackground}>
				<Container maxWidth="lg">
					<Grid
						container
						spacing={4}
						direction="row"
						justify="center"
						alignItems="center"
					>
						
							<Grid item xs={12} md={6}>
								<AvalanchePoolCard
									key={[...SlopesMap.pools][0].pid}
								slopeName={[...SlopesMap.pools][0].name}
								slopeSymbol={[...SlopesMap.pools][0].symbol}
									// slopeLogo={slope.logo}
									// slopeStakedAmount={"10,200.00"}
									// pendingPwdrRewards={"12.04"}
								slopeSign={[...SlopesMap.pools][0].sign}
								// slopeEntryFee={"5.00%"}
								// totalStakedAmount={"2,431,221.25"}
								/>
							</Grid>
					</Grid>
				</Container>
				</Box>
			</FeatureGatedView>
    </HeaderView>
  )
}
