import React from 'react'
import { LodgePoolCard } from './components/LodgePoolCard'
import { makeStyles } from '@material-ui/core/styles';

import { Box, Container, Grid } from '@material-ui/core'
import LodgeBackground from 'assets/img/lodge-bg.png'


import { DisplayView } from 'components/DisplayView'
import { FlexCenter } from 'components/FlexCenter'
import { useLoyalty } from 'hooks/useLoyalty'
import { getBoardImage, getBoard } from 'utils'

const useStyles = makeStyles((theme) => ({
	lodgeBackground: {
		backgroundImage: `url(${LodgeBackground})`,
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
	const { active, stats } = useLoyalty()



	return (
		<DisplayView justify="center" className={classes.lodgeBackground}>
			<Container maxWidth="md">
				<Grid
					container
					justify="center"
					alignItems="center"
				>
					<Grid item xs={12} md={6}>
						<LodgePoolCard 
							board={stats ? getBoard(stats.staked) : "Normal"} 
							boost={stats ? `${stats.boost / 10}%` : "0%"}
						/>
					</Grid>
					<img 
						src={getBoardImage(stats ? stats.staked : undefined)} 
						className={classes.pwdrBoard}
						alt="my-board"
					/>
				</Grid>
			</Container>
		</DisplayView>
	)
}
