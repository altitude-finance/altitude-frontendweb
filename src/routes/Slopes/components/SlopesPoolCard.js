import React from 'react'
import { Card, CardContent, CardActions, Button, Typography, CardMedia, Grid, Paper } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles';
import { TextDecoration } from 'components/TextDecoration'
import { makeStyles } from '@material-ui/core/styles';
import { FlexCenter } from 'components/FlexCenter'
import OpenInNewIcon from '@material-ui/icons/OpenInNew'; // External Links
import { spacing } from '@material-ui/system';


const useStyles = makeStyles({
    media: {
        height: 64,
        width: 64,
    },
    slopeSign: {
        height: 128,
        width: 128
    },
    buttonPadding: {
        padding: '5px',
    }
});

export const SlopesPoolCard = ({
    slopeLogo,
    slopeName,
    slopeApr,
    slopeStakedAmount,
    pendingPwdrRewards,
    slopeSign

}) => {

    const classes = useStyles();
    const theme = useTheme();

    return (
        <Paper>
            <Grid container direction="row" justify="center" alignItems="center">
                <Grid container item md={12} justify="center" alignItems="center" className={classes.buttonPadding}>
                    <Grid item>
                        <img
                            src={slopeLogo}
                            title={slopeName}
                            className={classes.media}
                        />
                    </Grid>
                    <Grid item>
                        <Typography
                            variant="h3"
                            color="textSecondary"
                            align="center"
                        >
                            {slopeName}
                        </Typography>
                    </Grid>
                </Grid>

                <TextDecoration
                    height="2px"
                    border={2}
                />

                <Grid container md={12} justify="center" alignItems="center">
                    <Grid item>
                        <Typography
                            variant="h3"
                            color="textSecondary"
                            align="center"
                        >
                            APR: {slopeApr}
                        </Typography>
                    </Grid>
                </Grid>

                <TextDecoration
                    height="2px"
                    border={2}
                />

                <Grid container md={12}>

                    <Grid item md={6}>
                        <Grid container item md={12}>
                            <Grid container item md={12} justify="center" alignItems="center">
                                <Grid item md={12}>
                                    <Typography
                                        variant="h3"
                                        color="textSecondary"
                                        align="center"
                                    >
                                        {slopeStakedAmount}
                                    </Typography>
                                </Grid>
                                <Grid item md={12}>
                                    <Typography
                                        variant="h5"
                                        color="textSecondary"
                                        align="center"
                                    >
                                        My {slopeName} Staked
                                        </Typography>
                                </Grid>
                            </Grid>
                            <Grid container item alignContent="center" justify="center">
                                <Grid item className={classes.buttonPadding}>
                                    <Button
                                        href="https://assets.altitude.finance/static/files/Altitude_Finance_Whitepaper.pdf"
                                        target="_blank"
                                        variant="contained"
                                        color="primary"
                                        style={{ color: 'white' }}
                                        endIcon={<OpenInNewIcon />}
                                    >
                                        Stake
                                        </Button>
                                </Grid>
                                <Grid item className={classes.buttonPadding}>
                                    <Button
                                        href="https://assets.altitude.finance/static/files/Altitude_Finance_Whitepaper.pdf"
                                        target="_blank"
                                        variant="contained"
                                        color="primary"
                                        style={{ color: 'white' }}
                                        endIcon={<OpenInNewIcon />}
                                    >
                                        Unstake
                                        </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>


                    <Grid item md={6}>
                        <Grid container item md={12}>
                            <Grid container item md={12} justify="center" alignItems="center">
                                <Grid item md={12}>
                                    <Typography
                                        variant="h3"
                                        color="textSecondary"
                                        align="center"
                                    >
                                        {pendingPwdrRewards}
                                    </Typography>
                                </Grid>
                                <Grid item md={12}>
                                    <Typography
                                        variant="h5"
                                        color="textSecondary"
                                        align="center"
                                    >
                                        Pending Rewards
                                            </Typography>
                                </Grid>
                            </Grid>
                            <Grid container item alignContent="center" justify="center">
                                <Grid item className={classes.buttonPadding}>
                                    <Button
                                        href="https://assets.altitude.finance/static/files/Altitude_Finance_Whitepaper.pdf"
                                        target="_blank"
                                        variant="contained"
                                        color="primary"
                                        style={{ color: 'white' }}
                                        endIcon={<OpenInNewIcon />}
                                    >
                                        Claim Rewards
                                        </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>


            </Grid>
        </Paper>
    )
}
