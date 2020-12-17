import { FeatureGatedView } from 'components/FeatureGatedView'
import { HeaderView } from 'components/HeaderView'
import React from 'react'
import { LodgeHeader } from './components/LodgeHeader'
import { LodgePoolCard } from './components/LodgePoolCard'
import { LodgeTrophyView } from './components/LodgeTrophyView'

import { makeStyles } from '@material-ui/core/styles';

import { Box, Container, Grid } from '@material-ui/core'
import lodge from 'assets/img/Lodge_04_2000x600.png'
import pwdrBoard from 'assets/img/DefaultAlphav02.gif'
import { DisplayView } from 'components/DisplayView'
import { FlexCenter } from 'components/FlexCenter'


const useStyles = makeStyles((theme) => ({
	lodgeBackground: {
		backgroundImage: `url(${lodge})`,
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		zIndex: "100",
		height: "100%",
		minHeight: "100vh",
		position: "relative"
	},
	pwdrBoard: {
		[theme.breakpoints.down('sm')]: {
			width: "256px"
		},
		[theme.breakpoints.up('md')]: {
			width: "384px"
		},
		textAlign: 'center'
	}
}))

export const Lodge = () => {
	const classes = useStyles()

	return (
		<DisplayView justify="center" className={classes.lodgeBackground}>
			{/* <LodgeHeader /> */}
			{/* <LodgeTrophyView /> */}
			{/* <FlexCenter> */}
				<Container maxWidth="md">
					<Grid
						container
						justify="center"
						alignItems="center"
					>
						<Grid item xs={12} md={6}>
							<LodgePoolCard />
						</Grid>
						<img 
							src={pwdrBoard} 
							className={classes.pwdrBoard}
							alt="my-board"
						/>
					</Grid>
				</Container>
			{/* </FlexCenter> */}
		</DisplayView>
	)
}
