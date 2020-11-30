import {
    Paper,
    Grid,
    Button,
    Typography
} from '@material-ui/core';
import {withStyles} from "@material-ui/core";
import {NavLink} from 'react-router-dom';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import React, {useEffect, useState} from "react";
import {useHttp} from "../../hooks/httpHook";
import {setUser} from "../../Redux/profileReducer";

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

    const {loading, request, error} = useHttp();

    useEffect(() => {
        try {
            request('/api/user/getuserdata', 'POST', {
                userId: props.user._id
            }).then((resp) => {
                setUser(resp.user);
            })
        } catch (e) {
        }
    },[request])

    const [userInfo, setUserInfo] = useState({
        user: {
            nickname: props.user.nickname,
            email: props.user.email,
            curPassword: '',
            password: '',
            repPassword: ''
        }
    })
    const [errorMessage, setErrorMessage] = useState({
        error: {
            message: '',
            color: ''
        }
    })

    ValidatorForm.addValidationRule('eqPasswords', (value) => {
        if (value !== userInfo.user.password) {
            return false;
        }
        return true;
    });

    const handleChange = (event) => {
        const {user} = userInfo;
        user[event.target.name] = event.target.value;
        setUserInfo({user});
    }

    const handleNickSubmit = async () => {
        try {
            await request('/api/user/changenickname', 'POST', {
                nickname: userInfo.user.nickname,
                userId: props.user.userId
            }).then((resp) => {
                const {error} = errorMessage;
                error['message'] = resp.message ? resp.message : resp.error;
                error['color'] = resp.message ? 'inherit' : 'error'
                setErrorMessage({error})
            })
        } catch (e) {
        }
    }
    const handleEmailSubmit = async () => {
        try {
            await request('/api/user/changemail', 'POST', {
                email: userInfo.user.email,
                userId: props.user.userId
            }).then((resp) => {
                const {error} = errorMessage;
                error['message'] = resp.message ? resp.message : resp.error;
                error['color'] = resp.message ? 'inherit' : 'error'
                setErrorMessage({error})
            })
        } catch (e) {
        }
    }
    const handlePasswordSubmit = async () => {
        try {
            await request('/api/user/changepassword', 'POST', {
                password: userInfo.user.password,
                curPassword: userInfo.user.curPassword,
                userId: props.user.userId
            }).then((resp) => {
                const {error} = errorMessage;
                error['message'] = resp.message ? resp.message : resp.error;
                error['color'] = resp.message ? 'inherit' : 'error'
                setErrorMessage({error})
            })
        } catch (e) {
        }
    }

    const {classes} = props;
    return (
        <Grid container>
            <Grid item xs={12}>
                <Paper elevation={5} className={classes.paper}>
                    <Typography align={"center"} variant={"h5"} className={classes.link}>
                        Профіль
                    </Typography>

                    <ValidatorForm onSubmit={handleNickSubmit}>
                        <Grid container justify={"center"} alignItems={"center"} className={classes.changeBlock}>
                            <Grid item xs={10} sm={8} lg={6}>
                                <TextValidator variant={"outlined"}
                                               fullWidth
                                               inputProps={{className: classes.textField}}
                                               value={userInfo.user.nickname}
                                               onChange={handleChange}
                                               name={'nickname'}
                                               placeholder='Введіть ваш nickname'
                                               validators={['required']}
                                               errorMessages={['Це поле обов\'язкове для заповнення']}

                                />

                            </Grid>
                            <Button type={"submit"} variant={"contained"}
                                    className={classes.confirmButton}>Змінити</Button>
                        </Grid>
                    </ValidatorForm>

                    <ValidatorForm onSubmit={handleEmailSubmit}>
                        <Grid container justify={"center"} alignItems={"center"} className={classes.changeBlock}>
                            <Grid item xs={10} sm={8} lg={6}>
                                <TextValidator variant={"outlined"}
                                               fullWidth
                                               inputProps={{className: classes.textField}}
                                               value={userInfo.user.email}
                                               onChange={handleChange}
                                               name={'email'}
                                               placeholder='Введіть ваш email'
                                               validators={['isEmail', 'required']}
                                               errorMessages={['Не правильний формат', 'Це поле обов\'язкове для заповнення']}
                                />
                            </Grid>
                            <Button type={"submit"} variant={"contained"}
                                    className={classes.confirmButton}>Змінити</Button>
                        </Grid>
                    </ValidatorForm>

                    <ValidatorForm onSubmit={handlePasswordSubmit}>
                        <Grid container justify={"center"} alignItems={"center"} className={classes.changeBlock}>
                            <Grid item xs={10} sm={8} lg={6}>
                                <TextValidator variant={"outlined"}
                                               style={{marginBottom: '20px'}}
                                               fullWidth
                                               inputProps={{className: classes.textField, type: 'password'}}
                                               value={userInfo.user.curPassword}
                                               onChange={handleChange}
                                               name={'curPassword'}
                                               placeholder='Введіть ваш пароль'
                                               validators={['minStringLength:6', 'required']}
                                               errorMessages={['Введіть мінімум 6 символів', 'Це поле обов\'язкове для заповнення']}
                                />
                                <TextValidator variant={"outlined"}
                                               style={{marginBottom: '20px'}}
                                               fullWidth
                                               inputProps={{className: classes.textField, type: 'password'}}
                                               value={userInfo.user.password}
                                               onChange={handleChange}
                                               name={'password'}
                                               placeholder='Введіть новий пароль'
                                               validators={['minStringLength:6', 'required']}
                                               errorMessages={['Введіть мінімум 6 символів', 'Це поле обов\'язкове для заповнення']}
                                />
                                <TextValidator variant={"outlined"}
                                               fullWidth
                                               inputProps={{className: classes.textField, type: 'password'}}
                                               value={userInfo.user.repPassword}
                                               onChange={handleChange}
                                               name={'repPassword'}
                                               placeholder='Повторіть пароль'
                                               validators={['eqPasswords']}
                                               errorMessages={['Паролі не співпадають']}
                                />
                            </Grid>
                            <Button type={"submit"} variant={"contained"}
                                    className={classes.confirmButton}>Змінити</Button>
                        </Grid>
                        <Typography align={"center"} variant={"body1"} color={errorMessage.error.color}
                                    className={classes.link}>
                            {errorMessage.error.message}
                        </Typography>
                    </ValidatorForm>

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