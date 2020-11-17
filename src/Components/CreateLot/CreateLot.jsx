import {
    Paper,
    Grid,
    Typography,
    TextField,
} from '@material-ui/core';
import {withStyles} from "@material-ui/core";
import React from "react";
import Button from "@material-ui/core/Button";
import CloudUploadTwoToneIcon from '@material-ui/icons/CloudUploadTwoTone';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

const style = theme => ({
    paper: {
        margin: '10px 5px',
        padding: '5px',
        backgroundColor: '#268777',
        color: 'white',
    },
    link: {
        textDecoration: 'none',
        margin: '15px auto',
    },
    input: {
        position: 'absolute',
        opacity: '0',
        top: 0,
        left: 0,
        marginTop: '-20px'
    },
    labelFill: {
        cursor: 'pointer',
        position: 'relative',
        display: 'block',
        width: '100%',
        height: '3em',
        background: '#19594f',
        borderRadius: '5px',
        marginBottom: '20px',
    },
    labelFillWrap: {
        padding: '0px 10px'
    },
    textField: {
        marginBottom: '20px',
        '& label': {
            color: 'white'
        },
        '& input': {
            color: 'white'
        }
    },
    confirmButton: {
        background: '#19594f',
        color: 'white',
        marginBottom: '20px',
        padding: '10px 20px',
        '&:hover': {
            backgroundColor: '#1e6b60'
        },
    }
})

class CreateLot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fileName: 'Завантажити файл',
            file: '',
            validation: {
                name: '',
                price: '',
                instantPrice: '',
                comment: '',
                minBet: '',
                info: '',
            }
        }
        this.handleFileLoad = this.handleFileLoad.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleFileLoad(event) {
        this.setState({fileName: event.target.value, file: event.target.files})
    }

    handleChange(event) {
        const {validation} = this.state;
        validation[event.target.name] = event.target.value;
        this.setState({validation});
    }

    onFormSubmit(e) {
        console.log(this.state);
        debugger;
        this.props.savePhoto(this.state.file);
    }

    render() {
        const {classes} = this.props;
        const {fileName} = this.state;
        const {name, price, instantPrice, comment, minBet, info} = this.state.validation;
        return (
            <ValidatorForm onSubmit={this.onFormSubmit}>
                <Grid item xs={12}>
                    <Paper elevation={5} className={classes.paper}>
                        <Typography align={"center"} variant={"h5"} className={classes.link}>
                            Створення лоту
                        </Typography>
                        <Grid container justify={'center'}>
                            <Grid item xs={12} sm={10} lg={8}>
                                <Grid container justify={"center"}>
                                    <Grid item xs={12} sm={8}>
                                        <label for="inputFile" className={classes.labelFill}>
                                            <Grid container justify={"space-between"}
                                                  alignItems={"center"}
                                                  style={{height: '100%'}}
                                                  className={classes.labelFillWrap}
                                            >
                                                <Typography>{fileName}</Typography>
                                                <CloudUploadTwoToneIcon fontSize={"large"}/>
                                            </Grid>
                                        </label>
                                        <input value={''}
                                               id='inputFile'
                                               type="file"
                                               className={classes.input}
                                               onChange={this.handleFileLoad}
                                        />
                                        <button type={'submit'}>Submit</button>
                                    </Grid>
                                </Grid>
                                <TextValidator fullWidth
                                               variant={"outlined"}
                                               label='Назва'
                                               className={classes.textField}
                                               onChange={this.handleChange}
                                               name="name"
                                               value={name}
                                               validators={['minStringLength:2', 'required']}
                                               errorMessages={['Введіть мінімум 2 символи', 'Це поле обов\'язкове для заповнення']}
                                />
                                <TextValidator fullWidth
                                               variant={"outlined"}
                                               label='Початкова ціна'
                                               className={classes.textField}
                                               onChange={this.handleChange}
                                               name="price"
                                               value={price}
                                               validators={['required']}
                                               errorMessages={['Це поле обов\'язкове для заповнення']}
                                />
                                <TextValidator fullWidth
                                               variant={"outlined"}
                                               label='Мінімальна ставка'
                                               className={classes.textField}
                                               onChange={this.handleChange}
                                               name="minBet"
                                               value={minBet}
                                               validators={['required']}
                                               errorMessages={['Це поле обов\'язкове для заповнення']}
                                />
                                <TextValidator fullWidth
                                               variant={"outlined"}
                                               label='Ціна миттєвої покупки'
                                               className={classes.textField}
                                               onChange={this.handleChange}
                                               name="instantPrice"
                                               value={instantPrice}
                                               validators={['required']}
                                               errorMessages={['Це поле обов\'язкове для заповнення']}
                                />
                                <TextValidator fullWidth
                                               variant={"outlined"}
                                               label='Інформація про товар'
                                               className={classes.textField}
                                               onChange={this.handleChange}
                                               name="info"
                                               value={info}
                                />
                                <TextValidator fullWidth
                                               variant={"outlined"}
                                               label='Коментар'
                                               className={classes.textField}
                                               onChange={this.handleChange}
                                               name="comment"
                                               value={comment}
                                />
                                <Grid container justify={"center"}>
                                    <Button variant={"contained"}
                                            type={"submit"}
                                            className={classes.confirmButton}
                                    >
                                        Створити
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </ValidatorForm>
        )
    }
}

export default withStyles(style)(CreateLot);