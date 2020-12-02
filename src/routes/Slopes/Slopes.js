import { FeatureGatedView } from 'components/FeatureGatedView'
import { HeaderView } from 'components/HeaderView'
import React from 'react'
import { SlopesHeader } from './components/SlopesHeader'
import { SlopesStats } from './components/SlopesStats'
import { SlopesPoolCard } from './components/SlopesPoolCard'
import greenCircle from 'assets/img/greenCircleSlopeSign.png'
import { Grid } from '@material-ui/core'
import usdcLogo from 'assets/img/usdcLogo.png'
import daiLogo from 'assets/img/daiLogo.png'
import wBTCLogo from 'assets/img/wBTCLogo.png'
import wETHLogo from 'assets/img/wETHLogo.png'
import usdtLogo from 'assets/img/usdtLogo.png'
import altitudeLogo from 'assets/img/altitude-logo.png'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    containerPadding: {
        padding: '20px',
    }
});

export const Slopes = () => {

    const classes = useStyles();

    return (
        <HeaderView title="Slopes">
            <SlopesHeader />
            <SlopesStats />
            <Grid
                container
                spacing={4}
                direction="row"
                justify="center"
                alignItems="center"
                className={classes.containerPadding}

            >
                <Grid item xs={4}>
                    <SlopesPoolCard
                        slopeName={"PWDR-ETH"}
                        slopeApr={"4000.00%"}
                        slopeLogo={altitudeLogo}
                        slopeStakedAmount={"10200.00"}
                        pendingPwdrRewards={"12.04"}
                        slopeSign={greenCircle}
                    ></SlopesPoolCard>
                </Grid>
                <Grid item xs={4}><SlopesPoolCard
                    slopeName={"USDC"}
                    slopeApr={"800.00%"}
                    slopeLogo={usdcLogo}
                    slopeStakedAmount={"10200.00"}
                    pendingPwdrRewards={"12.04"}
                    slopeSign={greenCircle}
                ></SlopesPoolCard></Grid>
                <Grid item xs={4}><SlopesPoolCard
                    slopeName={"USDT"}
                    slopeApr={"800.00%"}
                    slopeLogo={usdtLogo}
                    slopeStakedAmount={"10200.00"}
                    pendingPwdrRewards={"12.04"}
                    slopeSign={greenCircle}
                ></SlopesPoolCard></Grid>
                <Grid item xs={4}><SlopesPoolCard
                    slopeName={"wETH"}
                    slopeApr={"800.00%"}
                    slopeLogo={wETHLogo}
                    slopeStakedAmount={"10200.00"}
                    pendingPwdrRewards={"12.04"}
                    slopeSign={greenCircle}
                ></SlopesPoolCard></Grid>
                <Grid item xs={4}><SlopesPoolCard
                    slopeName={"wBTC"}
                    slopeApr={"800.00%"}
                    slopeLogo={wBTCLogo}
                    slopeStakedAmount={"10200.00"}
                    pendingPwdrRewards={"12.04"}
                    slopeSign={greenCircle}
                ></SlopesPoolCard></Grid>
                <Grid item xs={4}><SlopesPoolCard
                    slopeName={"DAI"}
                    slopeApr={"800.00%"}
                    slopeLogo={daiLogo}
                    slopeStakedAmount={"10200.00"}
                    pendingPwdrRewards={"12.04"}
                    slopeSign={greenCircle}
                ></SlopesPoolCard></Grid>
            </Grid>
            {/* slopes.map((slope, i) => (<SlopesPoolCard />)) */}
        </HeaderView>
    )
}
