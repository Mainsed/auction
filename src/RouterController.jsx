import {Route} from "react-router-dom";
import React from "react";
import Box from "@material-ui/core/Box";
import MainPage from "./Components/MainPage";
import SignUp from "./Components/LogIn/SignUp";
import LogIn from "./Components/LogIn/LogIn";
import FindLot from "./Components/FindLots/FindLot";
import Profile from "./Components/Profile/Profile";
import MyLots from "./Components/Profile/MyLots/MyLots";
import MyBets from "./Components/Profile/MyBets/MyBets";
import MyWins from "./Components/Profile/MyWins/MyWins";
import Lot from "./Components/Lot/Lot"
import CreateLot from "./Components/CreateLot/CreateLot";

class RouteController extends React.Component {
    render() {
        return (
            <Box>
                <Route exact path={'/'} render={() => <MainPage/>}/>
                <Route exact path={'/login'} render={() => <LogIn/>}/>
                <Route exact path={'/signup'} render={() => <SignUp/>}/>
                <Route exact path={'/findlot'} render={() => <FindLot/>}/>
                <Route exact path={'/profile'} render={() => <Profile/>}/>
                <Route exact path={'/lot/:id?'} render={() => <Lot/>}/>
                <Route exact path={'/mylots'} render={() => <MyLots/>}/>
                <Route exact path={'/mybets'} render={() => <MyBets/>}/>
                <Route exact path={'/mywins'} render={() => <MyWins/>}/>
                <Route exact path={'/createlot'} render={() => <CreateLot/>}/>

                {/*<Route path={'/profile/:id?'} render={() => <ProfileContainer/>}/>*/}
            </Box>
        )
    }
}

export default RouteController;
