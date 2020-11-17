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
import {NavLink} from 'react-router-dom';
import Lot from './Lot'
import React from "react";

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
                                <Select className={classes.select}>
                                    <MenuItem value={0}>Всі</MenuItem>
                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                    <MenuItem value={4}>4</MenuItem>
                                </Select>
                            </FormControl>
                            <Grid alignItems={"center"} className={classes.filterElement}>
                                <Typography variant={"h6"} align={"center"}>Ціна миттєвої покупки</Typography>
                                <Typography align={"center"} style={{lineHeight: '2em'}}>
                                    Від
                                    <TextField variant={"outlined"}
                                               style={{maxWidth: '35%', margin: '0px 5px'}}
                                               inputProps={{style: {padding: '10px'}}}
                                               className={classes.textField}
                                    />
                                    До
                                    <TextField variant={"outlined"}
                                               style={{maxWidth: '35%', margin: '0px 5px'}}
                                               inputProps={{style: {padding: '10px'}}}
                                               className={classes.textField}
                                    />
                                </Typography>
                            </Grid>
                            <FormControl className={classes.formControl}>
                                <InputLabel style={{color: 'white'}}>Залишилось часу</InputLabel>
                                <Select className={classes.select}>
                                    <MenuItem value={0}>Всі</MenuItem>
                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                    <MenuItem value={4}>4</MenuItem>
                                </Select>
                            </FormControl>
                            <Grid alignItems={"center"} className={classes.filterElement}>
                                <Typography variant={"h6"} align={"center"}>Сума останньої ставки</Typography>
                                <Typography align={"center"} style={{lineHeight: '2em'}}>
                                    Від
                                    <TextField variant={"outlined"}
                                               style={{maxWidth: '35%', margin: '0px 5px'}}
                                               inputProps={{style: {padding: '10px'}}}
                                               className={classes.textField}
                                    />
                                    До
                                    <TextField variant={"outlined"}
                                               style={{maxWidth: '35%', margin: '0px 5px'}}
                                               inputProps={{style: {padding: '10px'}}}
                                               className={classes.textField}
                                    />
                                </Typography>
                            </Grid>
                            <Grid container justify={"center"}>
                                <Button className={classes.confirmButton}
                                        variant={"contained"}
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
                                       placeholder={'Пошук'}
                                       className={classes.textField}
                            />
                            <Grid container>
                                <Lot/>
                                <Lot/>
                                <Lot/>
                                <Lot/>
                                <Lot/>
                                <Lot/>
                                <Lot/>
                                <Lot/>
                                <Lot/>
                                <Lot/>
                                <Lot/>
                                <Lot/>
                                <Lot/>
                                <Lot/>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default withStyles(style)(FindLot);