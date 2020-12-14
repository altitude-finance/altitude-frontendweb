import React, { useState } from 'react'
import { Button, Typography, Grid, Paper, Box } from '@material-ui/core'
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import { useTheme } from '@material-ui/core/styles';
import { TextDecoration } from 'components/TextDecoration'
import { makeStyles } from '@material-ui/core/styles';
import { FlexCenter } from 'components/FlexCenter'
import OpenInNewIcon from '@material-ui/icons/OpenInNew'; // External Links
import { spacing } from '@material-ui/system';

const useStyles = makeStyles({
  // media: {
  //   height: 64,
  //   width: 64,
  // },
  // buttonPadding: {
  //   padding: '5px',
  // }
});

export const SlopesPoolCard = ({
  slopeId,
  slopeLogo,
  slopeName,
  slopeSymbol,
  slopeApr="800%",
  slopeStakedAmount="10,000",
  pendingPwdrRewards="1000",
  slopeSign,
  slopeEntryFee="10%",
  totalStakedAmount="100000"
}) => {

  const classes = useStyles();
  const [value, setValue] = useState('1');
  const theme = useTheme();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper>
      <FlexCenter flexDirection="column" alignItems="center" p={2}>
        <img
          src={slopeSign}
          alt={slopeName}
          height={50}
        />

        {/* <TextDecoration
          height="2px"
          border={2}
          line1width="80%"
          line2width="60%"
          mb={1}
        /> */}

        <Grid container md={12} justify="center" alignItems="center">
          {/* <Grid item>
            <Typography
              variant="h3"
              color="textSecondary"
              align="center"
            >
              APR: {slopeApr}
            </Typography>
          </Grid> */}
          <FlexCenter
            my={2}
            flexDirection="column"
            alignSelf="center"
          // justifySelf="start"
          >
            <Typography variant="h4" align="center">
              <b>{slopeSymbol} Slope</b>
            </Typography>
            <TextDecoration />

            <Typography
              variant="body1"
              color="textSecondary"
              align="center"
            >
              Waiting for LGE Completion
            </Typography>
          </FlexCenter>
        </Grid>

        {/* <TextDecoration
          height="2px"
          border={2}
          // line1width="60%"
          // line2width="40%"
          mb={1} 
        /> */}


        {/* <TabContext value={value}>
          <Paper elevation={3}>
            <TabList onChange={handleChange} aria-label="simple tabs example" centered
              TabIndicatorProps={{
                style: {
                  backgroundColor: theme.palette.secondary.main

                }
              }}

            >
              <Tab label="My Info" value="1" />
              <Tab label="Slope Info" value="2" />
            </TabList>
          </Paper>
          <TabPanel value="1">
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
                        My {slopeSymbol} Staked
                      </Typography>
                    </Grid>
                  </Grid>
                  <FlexCenter>
                    <Box>
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
                    </Box>
                    <Box>
                      <Button
                        href="https://assets.altitude.finance/static/files/Altitude_Finance_Whitepaper.pdf"
                        target="_blank"
                        variant="contained"
                        color="danger"
                        style={{ color: 'white' }}
                        endIcon={<OpenInNewIcon />}
                      >
                        Unstake
                      </Button>
                    </Box>
                  </FlexCenter>
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
          </TabPanel>

          <TabPanel value="2">
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
                        {totalStakedAmount}
                      </Typography>
                    </Grid>
                    <Grid item md={12}>
                      <Typography
                        variant="h5"
                        color="textSecondary"
                        align="center"
                      >
                        Total {slopeName} Staked
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
                        {slopeEntryFee}
                      </Typography>
                    </Grid>
                    <Grid item md={12}>
                      <Typography
                        variant="h5"
                        color="textSecondary"
                        align="center"
                      >
                        Slope Entry Fee
                                          </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </TabPanel>

        </TabContext> */}

      </FlexCenter>

    </Paper>
  )
}
