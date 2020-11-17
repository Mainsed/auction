import React from "react";
import Header from "./Components/Header/Header"
import {Grid} from '@material-ui/core';
import RouterController from "./RouterController"
import Footer from "./Components/Footer"
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Grid container justify={"center"}>
                    <Grid item xs={12} lg={10} xl={8}>
                        <Header/>
                        <RouterController/>
                        <Footer/>
                    </Grid>
                </Grid>
            </BrowserRouter>
        </div>
    );
}

export default App;
