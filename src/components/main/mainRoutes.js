import React from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../common/Header";
import Home from "../home/Home";
import Lottery from "../lottery/Lottery";
import User from "../management/account/User";
import Bank from "../management/account/Bank";
import Add from "../management/account/Add";
import Betrecord from "../management/record/Betrecord";
import TraceRecord from "../management/record/traceRecord";
import Charge from "../management/fund/Charge";
import Transfer from "../management/fund/Transfer";
import Withdraw from "../management/fund/Withdraw";
import Teamview from "../management/agent/Teamview";
import Createaccount from "../management/agent/Createaccount";
import Announce from "../management/announce/Announce";
import AnnounceContent from "../management/announce/Announce_content";
import DepositRecord from "../management/record/depositRecord";
import WithdrawRecord from "../management/record/withdrawRecord";
import TransferRecord from "../management/record/transferRecord";
import ChangeRecord from "../management/record/changeRecord";
import SelfRecord from "../management/record/selfRecord";
import TeamDeposit from "../management/team/teamDeposit";
import TeamManage from '../management/team/teamManage';
import TeamProfit from '../management/team/teamProfit';
import Contract from '../management/treatment/contract';
import Salary from '../management/treatment/salary';
import Letter from '../management/letter/letter';
import LetterView from '../management/letter/view';
import Appdownload from "../mobile/AppDownload";
import ContractRecord from '../management/treatment/contractRecord';
import Station from '../management/station/station';
import StationView from '../management/station/view';
const MainRoutes =(props) => {
  return (
    <Router>
        <Header history={props.history} userInfo={props.userInfo}/>
        <Switch>
            <Route path="/main/home" render={() => <Home history={props.history}  userInfo={props.userInfo}/>}/>
            <Route exact path="/main/lottery/:id" component={Lottery} />
            <Route exact path="/main/appdownload" component={Appdownload} />
            <Route exact path="/main/user" render={() => <User history={props.history} userInfo={props.userInfo}/>} />
            <Route exact path="/main/bank" render={() => <Bank history={props.history}/>} />
            <Route exact path="/main/bank/add" component={Add} />
            <Route exact path="/main/betrecord" component={Betrecord} />
            <Route exact path="/main/tracerecord" component={TraceRecord} />
            <Route exact path="/main/depositRecord" component={DepositRecord} />
            <Route exact path="/main/withdrawRecord" component={WithdrawRecord} />
            <Route exact path="/main/transferRecord" component={TransferRecord} />
            <Route exact path="/main/changeRecord" component={ChangeRecord} />
            <Route exact path="/main/selfRecord" component={SelfRecord} />
            <Route exact path="/main/charge" component={Charge} />
            <Route exact path="/main/transfer" component={Transfer} />
            <Route exact path="/main/withdraw" component={Withdraw} />
            <Route exact path="/main/teamview" component={Teamview} />
            <Route exact path="/main/teamDeposit" component={TeamDeposit} />
            <Route exact path="/main/teamManage" component={TeamManage} />
            <Route exact path="/main/teamProfit" component={TeamProfit} />
            <Route exact path="/main/contract" component={Contract} />
            <Route exact path="/main/contractRecord" component={ContractRecord} />
            <Route exact path="/main/salary" component={Salary} />
            <Route exact path="/main/createaccount" component={Createaccount} />
            <Route exact path="/main/announce" component={Announce} />
            <Route exact path="/main/announce_content/:id" component={AnnounceContent} />
            <Route exact path="/main/station" component={Station} />
            <Route exact path="/main/station_view/:id" component={StationView} />
            <Route exact path="/main/letter" component={Letter} />
            <Route exact path="/main/letter_view/:id" component={LetterView} />
        </Switch>
    </Router>
  );
};
export default MainRoutes;