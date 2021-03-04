import React from 'react'
import { Paper, Typography } from '@material-ui/core'

export const Text = ({ text }) => {
    return (
        <Paper>
            <Typography>
                {text}
            </Typography>
        </Paper>
    )
}