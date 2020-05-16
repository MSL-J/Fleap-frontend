import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/main/Main";
import Daily from "./pages/daily/Daily";
import Detail from "./pages/detail/Detail";
import Outdoor from "./pages/daily/activities/Outdoor";
import OutdoorMt from "./pages/daily/activities/OutdoorMt";
import OutdoorSurf from "./pages/daily/activities/OutdoorSurf";
import LearnMain from "./pages/daily/learn/LearnMain";
import MakeDiy from "./pages/daily/learn/MakeDiy";
import MakeDiyPot from "./pages/daily/learn/MakeDiyPot";
import MakeDiyCandle from "./pages/daily/learn/MakeDiyCandle";
import SignIn from "./pages/login/signIn/SignIn";
import SignUp from "./pages/login/signUp/SignUp";
import SignUpEntry from "./pages/login/signIn/SignInEntryPage";
import Payment from "./pages/payment/Payment";
import MyLikes from "./pages/myPage/MyLikes";
import MyFrip from "./pages/myPage/MyFrip";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import GlobalStyles from "./styles/GlobalStyles";
import SignInEntryPage from "./pages/signIn/SignInEntryPage";
import SignUpEntryPage from "./pages/signUp/SignUpEntryPage";

class Routes extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/main" component={Main} />
            <Route exact path="/daily" component={Daily} />
            <Route exact path="/daily/act/outdoor" component={Outdoor} />
            <Route exact path="/daily/act/outdoor/mt" component={OutdoorMt} />
            <Route
              exact
              path="/daily/act/outdoor/surf"
              component={OutdoorSurf}
            />
            <Route exact path="/daily/learn" component={LearnMain} />
            <Route exact path="/daily/learn/makediy" component={MakeDiy} />
            <Route
              exact
              path="/daily/learn/makediy/pot"
              component={MakeDiyPot}
            />
            <Route
              exact
              path="/daily/learn/makediy/candle"
              component={MakeDiyCandle}
            />
            <Route exact path="/detail" component={Detail} />
            <Route exact path="/detail/:id" component={Detail} />
            <Route exact path="/mylikes" component={MyLikes} />
            <Route exact path="/myfrip" component={MyFrip} />
            <Route exact path="/signin" component={SignInEntryPage} />
            <Route exact path="/signup" component={SignUpEntryPage} />
            <Route exact path="/payment" component={Payment} />

            {/* <Route exact path="/mypage" component={MyPage} /> */}
            <Route exact path="/signinpage" component={SignIn} />
            <Route exact path="/signuppage" component={SignUp} />
            <Route exact path="/singinentry" component={SignUpEntry} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/payment/:id" component={Payment} />
          </Switch>
          <Footer />
        </Router>
        <GlobalStyles />
      </>
    );
  }
}

export default Routes;
