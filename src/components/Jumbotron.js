import React from 'react'
import { Paper, Typography, makeStyles } from '@material-ui/core'

import img from '../assets/img/jumbotron.jpeg'

const useStyles = makeStyles({
    root: {
        backgroundImage: `url(${img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: 300,
        maxHeight: 300,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        WebkitTextStroke: "0.5px white"
    }
})

export const Jumbotron = () => {
    const { root } = useStyles()

    return (
        <Paper square elevation="0" className={root}>
            <Typography variant="h2" align="center">
                OULUN ETELÄ- JA KESKIPOHJALAINEN OSAKUNTA 
            </Typography>
        </Paper>
    )
}