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

import daiSign from 'assets/img/dai_sign.png'
import pwdrSign from 'assets/img/pwdr_eth_sign.png'
import usdcSign from 'assets/img/usdc_sign.png'
import usdtSign from 'assets/img/usdt_sign.png'
import wbtcSign from 'assets/img/wBTC_sign.png'
import wethSign from 'assets/img/wETH_sign.png'
import bigSlopeSign from 'assets/img/skislopesigns_header_1x.png'

const useStyles = makeStyles({
    containerPadding: {
        padding: '10px',
    }
});

export const Slopes = () => {

    const classes = useStyles();

    return (
        <HeaderView title="Slopes"
            headerImage={bigSlopeSign}

        >
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
                <Grid item xs={6}>
                    <SlopesPoolCard
                        slopeName={"PWDR-ETH"}
                        slopeApr={"4000.00%"}
                        slopeLogo={pwdrSign}
                        slopeStakedAmount={"10,200.00"}
                        pendingPwdrRewards={"12.04"}
                        slopeSign={pwdrSign}
                        slopeEntryFee={"5.00%"}
                        totalStakedAmount={"89,828.70"}
                    ></SlopesPoolCard>
                </Grid>
                <Grid item xs={6}><SlopesPoolCard
                    slopeName={"USDC"}
                    slopeApr={"800.00%"}
                    slopeLogo={usdcSign}
                    slopeStakedAmount={"10,200.00"}
                    pendingPwdrRewards={"12.04"}
                    slopeSign={usdcSign}
                    slopeEntryFee={"5.00%"}
                    totalStakedAmount={"2,431,221.25"}
                ></SlopesPoolCard></Grid>
                <Grid item xs={6}><SlopesPoolCard
                    slopeName={"USDT"}
                    slopeApr={"800.00%"}
                    slopeLogo={usdtSign}
                    slopeStakedAmount={"10,200.00"}
                    pendingPwdrRewards={"12.04"}
                    slopeSign={usdtSign}
                    slopeEntryFee={"5.00%"}
                    totalStakedAmount={"1,414,256.77"}
                ></SlopesPoolCard></Grid>
                <Grid item xs={6}><SlopesPoolCard
                    slopeName={"wETH"}
                    slopeApr={"800.00%"}
                    slopeLogo={wethSign}
                    slopeStakedAmount={"10,200.00"}
                    pendingPwdrRewards={"12.04"}
                    slopeSign={wethSign}
                    slopeEntryFee={"5.00%"}
                    totalStakedAmount={"415.41"}
                ></SlopesPoolCard></Grid>
                <Grid item xs={6}><SlopesPoolCard
                    slopeName={"wBTC"}
                    slopeApr={"800.00%"}
                    slopeLogo={wbtcSign}
                    slopeStakedAmount={"10,200.00"}
                    pendingPwdrRewards={"12.04"}
                    slopeEntryFee={"5.00%"}
                    totalStakedAmount={"12.12"}
                    slopeSign={wbtcSign}
                ></SlopesPoolCard></Grid>
                <Grid item xs={6}><SlopesPoolCard
                    slopeName={"DAI"}
                    slopeApr={"800.00%"}
                    slopeLogo={daiSign}
                    slopeStakedAmount={"10,200.00"}
                    pendingPwdrRewards={"12.04"}
                    slopeEntryFee={"5.00%"}
                    totalStakedAmount={"1,121,121.12"}
                    slopeSign={daiSign}
                ></SlopesPoolCard></Grid>
            </Grid>
            {/* slopes.map((slope, i) => (<SlopesPoolCard />)) */}
        </HeaderView>
    )
}
