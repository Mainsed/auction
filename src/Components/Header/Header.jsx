import {
    Paper,
    Grid,
} from '@material-ui/core';
import {withStyles} from "@material-ui/core";
import {NavLink} from 'react-router-dom';
import React from "react";
import Button from "@material-ui/core/Button";

const style = theme => ({
    paper: {
        margin: '10px 5px',
        padding: '10px 15px',
        backgroundColor: '#268777',
        color: 'white',
    },
    loginButton: {
        textDecoration: 'none',
        backgroundColor: '#19594f',
        color: 'white',
        '&:hover': {
            backgroundColor: '#1e6b60'
        },
        fontSize: '16px',
    },
    logo: {
        textDecoration: 'none',
        color: 'white',
    }
})

const Header = props => {
    const {classes} = props;
    const src = 'https://drscdn.500px.org/photo/159533631/m%3D900/v2?sig=7cf1ba4b1c724c55a76368f89392390956904df02907170602d704c8a38403a8'
    return (
        <Grid container>
            <Grid item xs={12}>
                <Paper elevation={5} className={classes.paper}>
                    <Grid container justify={"space-between"} style={{alignItems: 'center'}}>
                        <Grid item xs={4} sm={2} lg={1}>
                            <NavLink to={'/'} className={classes.logo}>
                                <img src={src} alt="logo" style={{maxWidth: '100%'}}/>
                            </NavLink>
                        </Grid>
                        <NavLink to='/login' style={{textDecoration: 'none'}}>
                            <Button variant={"contained"} className={classes.loginButton}>Login</Button>
                        </NavLink>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default withStyles(style)(Header);