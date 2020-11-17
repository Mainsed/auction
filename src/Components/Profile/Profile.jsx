import {
    Paper,
    Grid,
    TextField,
    Button,
    Typography
} from '@material-ui/core';
import {withStyles} from "@material-ui/core";
import {NavLink} from 'react-router-dom';
import React from "react";

const style = theme => ({
    paper: {
        margin: '10px 5px',
        padding: '5px',
        backgroundColor: '#268777',
        color: 'white',
    },
    dirButton: {
        fontSize: '16px',
        textDecoration: 'none',
        backgroundColor: '#19594f',
        color: 'white',
        '&:hover': {
            backgroundColor: '#1e6b60'
        },
        width: '180px',
        height: '60px',
    },
    link: {
        textDecoration: 'none',
        margin: '15px auto',
    },
    confirmButton: {
        fontSize: '16px',
        marginLeft: '20px',
        backgroundColor: '#19594f',
        color: 'white',
        '&:hover': {
            backgroundColor: '#1e6b60'
        },
        padding: '5px 10px',
    },
    changeBlock: {
        margin: '20px 0px'
    },
    textField: {
        color: 'white',
        padding: '10px'
    }
})

const Profile = props => {
    const {classes} = props;
    return (
        <Grid container>
            <Grid item xs={12}>
                <Paper elevation={5} className={classes.paper}>
                    <Typography align={"center"} variant={"h5"} className={classes.link}>
                        Профіль
                    </Typography>
                    <Grid container justify={"center"} alignItems={"center"} className={classes.changeBlock}>
                        <Grid item xs={10} sm={8} lg={6}>
                            <TextField variant={"outlined"}
                                       fullWidth
                                       inputProps={{className: classes.textField}}
                                       value={'Name'}

                            />
                        </Grid>
                        <Button variant={"contained"} className={classes.confirmButton}>Змінити</Button>
                    </Grid>
                    <Grid container justify={"center"} alignItems={"center"} className={classes.changeBlock}>
                        <Grid item xs={10} sm={8} lg={6}>
                            <TextField variant={"outlined"}
                                       fullWidth
                                       inputProps={{className: classes.textField}}
                                       value={"Email"}
                            />
                        </Grid>
                        <Button variant={"contained"} className={classes.confirmButton}>Змінити</Button>
                    </Grid>
                    <Grid container justify={"center"} alignItems={"center"} className={classes.changeBlock}>
                        <Grid item xs={10} sm={8} lg={6}>
                            <TextField variant={"outlined"}
                                       fullWidth
                                       inputProps={{className: classes.textField, type: 'password'}}
                                       value={"password"}
                            />
                        </Grid>
                        <Button variant={"contained"} className={classes.confirmButton}>Змінити</Button>
                    </Grid>

                    <Grid container direction={"column"}>
                        <NavLink to={'/mylots'} className={classes.link}>
                            <Button variant={"contained"} className={classes.dirButton}>Мої лоти</Button>
                        </NavLink>

                        <NavLink to={'/mybets'} className={classes.link}>
                            <Button variant={"contained"} className={classes.dirButton}>Мої ставки</Button>
                        </NavLink>

                        <NavLink to={'/mywins'} className={classes.link}>
                            <Button variant={"contained"} className={classes.dirButton}>Виграні лоти</Button>
                        </NavLink>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default withStyles(style)(Profile);