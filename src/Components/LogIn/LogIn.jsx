import {
    Paper,
    Grid,
    TextField,
    Typography,
    Button
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
    textField: {
        margin: '10px 0px',
    },
    confirmButton: {
        margin: '15px 0px',
        backgroundColor: '#19594f',
        color: 'white',
        '&:hover': {
            backgroundColor: '#1e6b60'
        }
    }
})

const LogIn = props => {
    const {classes} = props;
    return (
        <Grid container>
            <Grid item xs={12}>
                <Paper elevation={5} className={classes.paper}>
                    <Typography align={"center"}
                                variant={"h4"}
                                style={{marginBottom: '5%'}}
                    >
                        Logging in
                    </Typography>
                    <Grid container justify={"center"}>

                        <Grid item xs={12} sm={8} lg={7}>
                            <Typography align={"center"}>Nickname</Typography>
                            <TextField variant={"outlined"}
                                       fullWidth
                                       inputProps={{style: {padding: '10px', color: 'white'}}}
                                       className={classes.textField}
                                       placeholder='Enter your nickname'
                            />
                        </Grid>
                        <Grid item xs={12} sm={8} lg={7}>
                            <Typography align={"center"}>Password</Typography>
                            <TextField variant={"outlined"}
                                       fullWidth
                                       inputProps={{
                                           style: {padding: '10px', color: 'white'},
                                           type: 'password'
                                       }}
                                       className={classes.textField}
                                       placeholder='Enter your password'
                            />
                        </Grid>
                    </Grid>
                    <Grid container justify={"center"} alignItems={"center"}>
                        <Grid item>
                            <Button className={classes.confirmButton}
                                    variant={"contained"}
                            >
                                LogIn
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container justify={"center"} alignItems={"center"}>
                        <Typography style={{marginBottom: '10px'}}>
                            {"Don't have an account? "}
                            <NavLink style={{color: 'white'}}
                                     to="/signup"
                            >
                                Register now!
                            </NavLink>
                        </Typography>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default withStyles(style)(LogIn);