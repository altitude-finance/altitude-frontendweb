import { FeatureGatedView } from 'components/FeatureGatedView'
import { HeaderView } from 'components/HeaderView'
import React from 'react'
import { LodgeHeader } from './components/LodgeHeader'
import { LodgePoolCard } from './components/LodgePoolCard'
import { LodgeTrophyView } from './components/LodgeTrophyView'

import { makeStyles } from '@material-ui/core/styles';

import { Box, Container, Grid } from '@material-ui/core'
import SlopesMap from 'constants/SlopesMap'

import lodge from 'assets/img/Lodge_03.png'
import pwdrBoard from 'assets/img/DefaultAlphav02.gif'


const useStyles = makeStyles({

    fullHeight: {
        height: '100%'
    },

    lodgeBackground: {
        backgroundImage: `url(${lodge})`,
        backgroundPosition: 'center',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        zIndex: "100",
        height: "600px",
        position: "relative"
	},
	pwdrBoard: {
		width: '400px',
		height: '400px',
	}
});

export const Lodge = () => {

    const classes = useStyles();

    return (
        <HeaderView title="Lodge">
            <LodgeHeader />
			<LodgeTrophyView />
			<Box py={4} className={classes.lodgeBackground}>
				<Container maxWidth="lg">
					<Grid
						container
						spacing={4}
						direction="row"
						justify="center"
						alignItems="center"
					>

						<Grid item xs={12} md={6}>
							<LodgePoolCard
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
						<Grid item xs={12} md={6}>
							<img src={pwdrBoard} className={classes.pwdrBoard} />
						</Grid>
					</Grid>
				</Container>
			</Box>
        </HeaderView>
    )
}
