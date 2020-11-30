import {
    Paper,
    Grid,
    TextField,
    Typography,
    Button,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
} from '@material-ui/core';
import {withStyles} from "@material-ui/core";
import Lot from './Lot'
import React, {useEffect, useState} from "react";
import {useHttp} from "../../hooks/httpHook";

const style = theme => ({
    paper: {
        margin: '0px 5px',
        padding: '15px 10px',
        backgroundColor: '#268777',
        color: 'white',
        height: '100%',
    },
    formControl: {
        width: '100%',
        marginBottom: '20px'
    },
    filterElement: {
        marginBottom: '20px',
    },
    textField: {
        color: 'white',
        '& input': {
            color: 'white'
        }
    },
    select: {
        color: 'white'
    },
    confirmButton: {
        margin: '10px 0px',
        backgroundColor: '#19594f',
        color: 'white',
        '&:hover': {
            backgroundColor: '#1e6b60'
        }
    },
    paperWrap: {
        overflow: 'hidden',
        margin: '10px 0px',
        borderRadius: '10px'
    }
})

const FindLot = props => {
    const [time, setTime] = useState({
        rerenderTime: false
    })
    const [filter, setFilter] = useState({
        filters: {
            timeLeft: -1,
            category: -1,
            instantLow: '',
            instantHigh: '',
            lastBetLow: '',
            lastBetHigh: '',
            search: ''
        }
    })
    const {loading, request} = useHttp();
    const lots = props.lots ? Object.entries(props.lots) : null;

    const timerSet = () => {
        const timer = setTimeout(() => {
            setTime({rerenderTime: !time.rerenderTime})
        }, 1000);
    }

    const handleChange = (event) => {
        const {filters} = filter;
        filters[event.target.name] = event.target.value;
        setFilter({filters});
    }
    const handleTextChange = async (event) => {
        const {filters} = filter;
        filters[event.target.name] = event.target.value;
        setFilter({filters});
        await updateLots();
    }

    const updateLots = async () => {
        try {
            await request('/api/lot/findall', 'POST', {...filter}).then((resp) => {
                props.setLots(resp.lots);
            })
        } catch (e) {
        }
    }

    const submitFilters = async () => {
        await updateLots();
    }

    useEffect(async () => {
        await updateLots();
        timerSet();
    }, [request])

    const {classes} = props;
    return (
        <Grid container>
            <Grid item xs={12}>
                <Grid container>
                    <Grid item xs={12} lg={4} xl={3} className={classes.paperWrap}>
                        <Paper elevation={5} className={classes.paper}>
                            <Typography align={"center"}
                                        variant={"h5"}
                                        className={classes.filterElement}
                            >
                                Фільтрація
                            </Typography>
                            <FormControl className={classes.formControl}>
                                <InputLabel style={{color: 'white'}}>Категорія</InputLabel>
                                <Select className={classes.select} value={filter.filters.category}
                                        onChange={handleChange}
                                        name={'category'}>
                                    <MenuItem value={-1}>Всі</MenuItem>
                                    <MenuItem value={0}>Колекціонні предмети</MenuItem>
                                    <MenuItem value={1}>Комп'ютерна техніка</MenuItem>
                                    <MenuItem value={2}>Побутова техніка</MenuItem>
                                    <MenuItem value={3}>Одяг/Взуття</MenuItem>
                                    <MenuItem value={4}>Інше</MenuItem>
                                </Select>
                            </FormControl>
                            <Grid className={classes.filterElement}>
                                <Typography variant={"h6"} align={"center"}>Ціна миттєвої покупки</Typography>
                                <Typography align={"center"} style={{lineHeight: '2em'}}>
                                    Від
                                    <TextField variant={"outlined"}
                                               style={{maxWidth: '35%', margin: '0px 5px'}}
                                               inputProps={{style: {padding: '10px'}}}
                                               className={classes.textField}
                                               onChange={handleChange}
                                               name={'instantLow'}
                                    />
                                    До
                                    <TextField variant={"outlined"}
                                               style={{maxWidth: '35%', margin: '0px 5px'}}
                                               inputProps={{style: {padding: '10px'}}}
                                               className={classes.textField}
                                               onChange={handleChange}
                                               name={'instantHigh'}
                                    />
                                </Typography>
                            </Grid>
                            <FormControl className={classes.formControl}>
                                <InputLabel style={{color: 'white'}}>Залишилось часу</InputLabel>
                                <Select className={classes.select} value={filter.filters.timeLeft}
                                        onChange={handleChange}
                                        name={'timeLeft'}>
                                    <MenuItem value={-1}>Всі</MenuItem>
                                    <MenuItem value={1}>Менше години</MenuItem>
                                    <MenuItem value={2}>Менше дня</MenuItem>
                                    <MenuItem value={3}>Менше 3 днів</MenuItem>
                                    <MenuItem value={4}>Більше дня</MenuItem>
                                    <MenuItem value={5}>Більше 3 днів</MenuItem>
                                </Select>
                            </FormControl>
                            <Grid className={classes.filterElement}>
                                <Typography variant={"h6"} align={"center"}>Сума останньої ставки</Typography>
                                <Typography align={"center"} style={{lineHeight: '2em'}}>
                                    Від
                                    <TextField variant={"outlined"}
                                               style={{maxWidth: '35%', margin: '0px 5px'}}
                                               inputProps={{style: {padding: '10px'}}}
                                               className={classes.textField}
                                               onChange={handleChange}
                                               name={'lastBetLow'}
                                    />
                                    До
                                    <TextField variant={"outlined"}
                                               style={{maxWidth: '35%', margin: '0px 5px'}}
                                               inputProps={{style: {padding: '10px'}}}
                                               className={classes.textField}
                                               onChange={handleChange}
                                               name={'lastBetHigh'}
                                    />
                                </Typography>
                            </Grid>
                            <Grid container justify={"center"}>
                                <Button className={classes.confirmButton}
                                        variant={"contained"}
                                        onClick={submitFilters}
                                >
                                    Підтвердити
                                </Button>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} lg={8} xl={9} className={classes.paperWrap}>
                        <Paper elevation={5} className={classes.paper}>
                            <TextField fullWidth
                                       variant={"outlined"}
                                       inputProps={{style: {padding: '10px'}}}
                                       placeholder={'Введіть назву лоту'}
                                       className={classes.textField}
                                       onChange={handleTextChange}
                                       name={'search'}
                            />
                            <Grid container>
                                {lots ? lots.map((lot) => {
                                    return <Lot name={lot[1].name}
                                                lastBet={lot[1].lastBet}
                                                date={lot[1].date}
                                                id={lot[1]._id}
                                    />
                                }) : ''}
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default withStyles(style)(FindLot);