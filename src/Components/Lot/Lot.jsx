import {
    Paper,
    Grid,
    TextField,
    Button,
    Divider,
    Typography
} from '@material-ui/core';
import {withStyles} from "@material-ui/core";
import React from "react";

const style = theme => ({
    paper: {
        margin: '10px 5px',
        padding: '5px',
        backgroundColor: '#268777',
        color: 'white',
    },
    addPaper: {
        margin: '15px 0px',
        padding: '15px',
        backgroundColor: '#227568',
        color: 'white',
    },
    textField: {
        color: 'white',
        padding: '10px'
    },
    halfPage: {
        padding: '15px 30px',
    },
    mainPhoto: {
        width: '100%',
        marginRight: '15px'
    },
    secPhoto: {
        width: '100%',
        height: '100%',
    },
    secPhotoDiv: {
        background: 'black',
        margin: '10% 0px',
        position: 'relative',
    },
    photoText: {
        fontSize: '.8em',
        margin: '0px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: '-1em',
        marginLeft: '-2em'
    },
    divider: {
        margin: '0px 1px',
    },
    buttons: {
        fontSize: '16px',
        textDecoration: 'none',
        backgroundColor: '#19594f',
        color: 'white',
        '&:hover': {
            backgroundColor: '#1e6b60'
        },
        padding: '5px 10px',
    },
    element: {
        margin: '15px auto',
    }
})

const Lot = props => {
    const {classes} = props;
    const src = 'https://api.time.com/wp-content/uploads/2015/04/512137691.jpg?w=800&quality=85'
    return (
        <Grid container>
            <Grid item xs={12}>
                <Paper elevation={5} className={classes.paper}>
                    <Grid container justify={"space-evenly"}>
                        <Grid item xs={12} lg={6} className={classes.halfPage}>
                            <Grid container justify={"space-evenly"}>
                                <Grid item xs={8}>
                                    <img src={src} alt="photo" className={classes.mainPhoto}></img>
                                </Grid>
                                <Grid item xs={3}>
                                    <Grid container>
                                        <div className={classes.secPhotoDiv}>
                                            <img src={src} alt="photo" className={classes.secPhoto}/>
                                        </div>
                                        <div className={classes.secPhotoDiv}>
                                            <img src={src} alt="photo" className={classes.secPhoto}
                                                 style={{opacity: '0.7'}}/>
                                            <p className={classes.photoText}>Інші фото</p>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid container direction={"column"}>
                                <Typography align={"center"} variant={'h6'} className={classes.element}>
                                    Миттєва покупа: 2300₴
                                </Typography>
                                <div className={classes.element}>
                                    <Button variant={"contained"} className={classes.buttons}>
                                        Купити
                                    </Button>
                                </div>
                                <Typography align={"center"} variant={'h6'} className={classes.element}>
                                    Остання ставка: 1234₴
                                </Typography>
                                <TextField variant={"outlined"}
                                           fullWidth
                                           inputProps={{style: {padding: '10px', color: 'white'}}}
                                           placeholder='Ваша ставка'
                                />
                                <div className={classes.element}>
                                    <Button variant={"contained"} className={classes.buttons}>
                                        Зробити ставку
                                    </Button>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid item className={classes.divider}>
                            <Divider orientation={"vertical"}/>
                        </Grid>
                        <Grid item xs={12} lg={5} className={classes.halfPage}>
                            <Typography align={"center"} variant={'h6'}>
                                Назва
                            </Typography>
                            <Paper className={classes.addPaper} elevation={1}>
                                <Typography align={"center"} variant={'h5'}>
                                    Опис
                                </Typography>
                                <Typography align={"left"} variant={'h6'} className={classes.element}>
                                    Критерій1
                                </Typography>
                                <Typography align={"left"} variant={'h6'} className={classes.element}>
                                    Критерій2
                                </Typography>
                                <Typography align={"left"} variant={'h6'} className={classes.element}>
                                    Критерій3
                                </Typography>
                                <Typography align={"left"} variant={'h6'} className={classes.element}>
                                    Критерій4
                                </Typography>
                            </Paper>
                            <Paper className={classes.addPaper} elevation={1}>
                                <Typography align={"center"} variant={'h5'}>
                                    Коментарі продавця
                                </Typography>
                                <Typography align={"left"} variant={'h6'} className={classes.element}>
                                    Коментар1
                                </Typography>
                                <Typography align={"left"} variant={'h6'} className={classes.element}>
                                    Коментар2
                                </Typography>
                                <Typography align={"left"} variant={'h6'} className={classes.element}>
                                    Коментар3
                                </Typography>
                                <Typography align={"left"} variant={'h6'} className={classes.element}>
                                    Коментар4
                                </Typography>
                                <Typography align={"left"} variant={'h6'} className={classes.element}>
                                    Коментар5
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default withStyles(style)(Lot);