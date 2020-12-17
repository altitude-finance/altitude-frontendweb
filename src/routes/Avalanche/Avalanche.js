import { HeaderView } from 'components/HeaderView'
import React from 'react'
import { AvalancheHeader } from './components/AvalancheHeader'
import { AvalanchePoolCard } from './components/AvalanchePoolCard'
import { AvalancheStats } from './components/AvalancheStats'
import { Box, Container, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import avalanche from 'assets/img/AvalancheBG_2000x600.png'
import { DisplayView } from 'components/DisplayView'
import { FlexCenter } from 'components/FlexCenter'

const useStyles = makeStyles({
	avalancheBackground: {
		backgroundImage: `url(${avalanche})`,
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		height: "100%",
		minHeight: "100vh",
		position: "relative",
		overflow: 'hidden'
	}
});

export const Avalanche = () => {
	const classes = useStyles()

	return (
    <DisplayView justify="center" className={classes.avalancheBackground}>
			{/* <AvalancheHeader />
			<AvalancheStats /> */}
				
			<Container maxWidth="md">
				<FlexCenter>
					<AvalanchePoolCard />
				</FlexCenter>
			</Container>
    </DisplayView>
  )
}
