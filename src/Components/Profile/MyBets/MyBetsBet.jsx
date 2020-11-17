import {
    Paper,
    Grid, Typography,
} from '@material-ui/core';
import {withStyles} from "@material-ui/core";
import {NavLink} from 'react-router-dom';
import React from "react";

let elev = 5;

const style = theme => ({
    lotPaper: {
        padding: '2px',
        marginBottom: '20px',
        background: '#30ab97',
        transition: 'all .5s',
        '&:hover':{
            transform: 'scale(1.2)',
        }
    },
    lotPaperRed: {
        padding: '2px',
        marginBottom: '20px',
        background: '#bf1d1d',
        transition: 'all .5s',
        '&:hover':{
            transform: 'scale(1.2)',
        }
    },
    photo: {
        maxWidth: '41%',
    },
    lotText: {
        width: '100%'
    }
})

class MyBetsBet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {elev}
    }

    onMouseOver = () => {
        this.setState({elev: 15})
    }
    onMouseOut = () => {
        this.setState({elev: 5})
    }

    render() {
        const {classes} = this.props;
        const {elev} = this.state;
        const src = 'https://drscdn.500px.org/photo/159533631/m%3D900/v2?sig=7cf1ba4b1c724c55a76368f89392390956904df02907170602d704c8a38403a8'
        return (
            <NavLink to={'/lot/:1'} style={{textDecoration: 'none'}}>
                <Paper className={this.props.red ? classes.lotPaperRed : classes.lotPaper}
                       elevation={elev}
                       onMouseOver={this.onMouseOver}
                       onMouseOut={this.onMouseOut}
                >
                    <Grid container justify={"space-between"}>
                        <Grid item xs={4}>
                            <Grid container alignItems={"center"} justify={"space-between"} style={{height: '100%'}}>
                                <img src={src} alt="Photo" className={classes.photo}/>
                                <Grid item xs={7}>
                                    <Typography align={"center"}>
                                        Назва лоту
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={4}>
                            <Grid container alignItems={"center"} style={{height: '100%'}}>
                                <Typography align={"center"} className={classes.lotText}>
                                    Ваша ставка
                                </Typography>
                                <Typography align={"center"} className={classes.lotText}>
                                    {this.props.mybet}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={4}>
                            <Grid container alignItems={"center"} style={{height: '100%'}}>
                                <Typography align={"center"} className={classes.lotText}>
                                    Остання ставка
                                </Typography>
                                <Typography align={"center"} className={classes.lotText}>
                                    2345₴
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </NavLink>
        )
    }
}


export default withStyles(style)(MyBetsBet);