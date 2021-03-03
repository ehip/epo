import React from 'react'
import { Toolbar, Container, List, ListItem, ListItemText, makeStyles, Button } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.primary.main
    },
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    list: {
        display: "flex",
        flexDirection: "row"
    }
}))

export const Nav = () => {
    const { root, container, list } = useStyles()

    return (
        <Toolbar className={root}>
            <Container maxWidth="xl" className={container}>
                <Button>EPO</Button>
                <List dense className={list}>
                    <ListItem button>
                        <ListItemText primary="Osakunta" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Jäseneksi" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Linkkejä" />
                    </ListItem>
                </List>
            </Container>
        </Toolbar>
    )
}