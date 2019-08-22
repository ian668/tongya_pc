import React from "react";
import { HashRouter as Router, Route, Switch} from "react-router-dom";
import Login from './components/login/Login';
import Registered from './components/registered/Registered';
import Main from './components/main/main';
import RepairDns from "./components/repairDNS/RepairDNS";
import Mobile from "./components/mobile/Mobile";
import NotFound from './components/common/NotFound';
import Footer from './components/common/Footer';
const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/regist/:id" component={Registered} />
                <Route exact path="/repairDNS" component={RepairDns} />
                <Route exact path={`/main/:name`} component={Main} />
                <Route exact path={`/main/:name/:id`} component={Main} />
                <Route exact path={"/mobile"} component={Mobile} />
                <Route component={NotFound} />
            </Switch>
            <Footer />
        </Router>
    );
};


export default Routes;