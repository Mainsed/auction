import {
    Grid,
    Typography,
    Paper
} from '@material-ui/core';
import {withStyles} from "@material-ui/core";
import {NavLink} from 'react-router-dom';
import React from "react";

const style = theme => ({
    paper: {
        margin: '10px 5px',
        backgroundColor: '#19594f',
        color: 'white',
        overflow: 'hidden'
    },
    photo: {
        maxWidth: '100%',
    }
})

const Lot = props => {
    const src = 'https://drscdn.500px.org/photo/159533631/m%3D900/v2?sig=7cf1ba4b1c724c55a76368f89392390956904df02907170602d704c8a38403a8'
    const {classes} = props;
    return (
            <Grid item xs={6} sm={4} lg={3} xl={2}>
                <Paper className={classes.paper}>
                    <Grid container justify={"center"} direction={"column"}>
                        <NavLink align={'center'} to={'/id'}>
                            <img src={src} alt="Photo" className={classes.photo}/>
                        </NavLink>
                        <Typography align={"center"}>Назва лоту</Typography>
                        <Typography align={"center"}>2345₴</Typography>
                        <Typography align={"center"}>23:16:33</Typography>
                    </Grid>
                </Paper>
            </Grid>
    )
}

export default withStyles(style)(Lot);