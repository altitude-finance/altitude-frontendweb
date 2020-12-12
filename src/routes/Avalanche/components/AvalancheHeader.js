import React from 'react'
import SlopesSign from 'assets/img/slopes-signs.png'
import { Container, makeStyles } from '@material-ui/core'
import { FlexCenter } from 'components/FlexCenter'

const useStyles = makeStyles((theme) => ({
    headerSign: {
        [theme.breakpoints.down('sm')]: {
            width: "300"
        },
        [theme.breakpoints.up('md')]: {
            width: "600"
        }
    }
}))

export const AvalancheHeader = () => {

    const classes = useStyles()

    return (

        <div>

        </div>

  )
}
