import {
    Paper,
    Grid,
    TextField,
    Button,
    Divider,
    Typography
} from '@material-ui/core';
import {withStyles} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import {NavLink} from 'react-router-dom';
import {useHttp} from "../../hooks/httpHook";

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

    const [lot, setLot] = useState([])
    const [text, setText] = useState({
        field: {
            bet: '',
        },
        errors: {
            error: ''
        },
    })


    const {loading, request, error} = useHttp();
    useEffect(async () => {
        request('/api/lot/find', 'POST', {id: props.match.params.id}).then((resp) => {
            setLot({...resp._doc})
        })
    }, [text]);

    const closeLot = () => {
        request('/api/lot/updateBet', 'POST', {
            id: props.match.params.id,
            uId: props.uId,
            bet: lot.instantPrice
        })
        request('/api/lot/updateStatus', 'POST', {id: props.match.params.id, uId: props.uId})
    }
    const bet = () => {
        if (parseInt(text.field.bet) <= lot.lastBet) {
            const {errors} = text;
            errors['error'] = 'Ставка має бути вище останньої';
            setText({...text, errors});
            return;
        }
        debugger;
        if (!parseInt(text.field.bet) > 0) {
            const {errors} = text;
            errors['error'] = 'Впишіть ставку, більшу за останню';
            setText({...text, errors});
            return;
        }
        request('/api/lot/updateBet', 'POST', {
            id: props.match.params.id,
            uId: props.uId,
            bet: text.field.bet
        }).then((resp => {
            const {errors} = text;
            errors['error'] = '';
            setText({...text, errors});
        }))
        const {field} = text;
        field['bet'] = '';
        setText({...text, field});
    }

    const handleChange = (event) => {
        const {field} = text;
        const bet = event.target.value;
        field['bet'] = bet;
        setText({...text, field});
    }

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
                                    <img src={src} alt="photo" className={classes.mainPhoto}/>
                                </Grid>
                                <Grid item xs={3}>
                                    <Grid container>
                                        <div className={classes.secPhotoDiv}>
                                            <img src={src} alt="photo" className={classes.secPhoto}/>
                                        </div>
                                        <div className={classes.secPhotoDiv}>
                                            <img src={src} className={classes.secPhoto}
                                                 style={{opacity: '0.7'}}/>
                                            <p className={classes.photoText}>Інші фото</p>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Grid>
                            {lot.isClosed ?
                                <Typography align={"center"} variant={'h6'} className={classes.element}>
                                    {`Лот вже продано`}
                                </Typography>
                                :
                                <Grid container direction={"column"}>
                                    <Typography align={"center"} variant={'h6'} className={classes.element}>
                                        {`Миттєва покупа: ${lot.instantPrice}`}
                                    </Typography>
                                    <div className={classes.element}>
                                        {props.uId ?
                                            <Button variant={"contained"} className={classes.buttons}
                                                    onClick={closeLot}>
                                                Купити
                                            </Button> :
                                            <Typography align={"center"} variant={'h6'} className={classes.element}>
                                                Для покупки - <NavLink to={'/login'}>авторизуйтесь</NavLink>
                                            </Typography>
                                        }
                                    </div>
                                    {lot.lastBetOwner === props.uId ?
                                        <Typography align={"center"} variant={'h6'} className={classes.element}>
                                            {`Ваша ставка - остання`}
                                        </Typography>
                                        :
                                        <div>
                                            <Typography align={"center"} variant={'h6'} className={classes.element}>
                                                {`Остання ставка: ${lot.lastBet}`}
                                            </Typography>
                                            <TextField variant={"outlined"}
                                                       fullWidth
                                                       onChange={handleChange}
                                                       value={text.field.bet}
                                                       inputProps={{style: {padding: '10px', color: 'white'}}}
                                                       placeholder='Ваша ставка'
                                            />
                                            <Grid container justify={"center"} className={classes.element}>
                                                {props.uId ?
                                                    <Button variant={"contained"} className={classes.buttons}
                                                            onClick={bet}>
                                                        Зробити ставку
                                                    </Button> :
                                                    <Typography align={"center"} variant={'h6'}
                                                                className={classes.element}>
                                                        Для ставки - <NavLink to={'/login'}>авторизуйтесь</NavLink>
                                                    </Typography>}
                                            </Grid>
                                            <Typography align={"center"} color={"error"} variant={'h6'}
                                                        className={classes.element}>
                                                {text.errors.error}
                                            </Typography>
                                        </div>
                                    }
                                </Grid>}
                        </Grid>
                        <Grid item className={classes.divider}>
                            <Divider orientation={"vertical"}/>
                        </Grid>
                        <Grid item xs={12} lg={5} className={classes.halfPage}>
                            <Typography align={"center"} variant={'h6'}>
                                {lot.name}
                            </Typography>
                            <Paper className={classes.addPaper} elevation={1}>
                                <Typography align={"center"} variant={'h5'}>
                                    Опис
                                </Typography>
                                <Typography align={"left"} variant={'h6'} className={classes.element}>
                                    {lot.lotInfo}
                                </Typography>
                            </Paper>
                            <Paper className={classes.addPaper} elevation={1}>
                                <Typography align={"center"} variant={'h5'}>
                                    Коментарі продавця
                                </Typography>
                                <Typography align={"left"} variant={'h6'} className={classes.element}>
                                    {lot.sellerComment}
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