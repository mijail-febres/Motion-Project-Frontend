import CopyrightContainer from './Pages/Login/Copyright';
import MasterHeader from './Components/Posts/Header/Header';
import Login from './Pages/Login/Login';
import { GlobalStyle } from './Styles';
import QuestionContainer from './Components/Login/QuestionTop/QuestionTop';
import PublishContainer from './Components/PublishSomething/PublishSomething';
import PostDetails from './Components/PostDetails/PostDetails'
import Posts from './Pages/Posts/Posts';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SignUpConfirm from './Components/Login/SignUpConfirm/SignUpConfirm';
import SignUpForm from './Components/Login/SignUpForm/SignUpForm';
import SignUpVerify from './Components/Login/SignUpVerify/SignUpVerify';
import SignUpFormPage from './Pages/Signup/SignUpForm/SignUpFormPage';
import SignUpConfirmPage from './Pages/Signup/SignUpConfirm/SignUpConfirmPage';
import SignUpVerifyPage from './Pages/Signup/SignUpVerify/SignUpVerifyPage';
import ProfileCard from './Components/ProfileCard/ProfileCard';
import MainProfileCard from './Components/MainProfileCard/MainProfileCard';
import NotificationsForm from './Components/NotificationsForm/NotificationsForm';
import FindFriends from './Pages/Background/Background';
import Background from './Pages/Background/Background';
import MainProfileCardContainer from './Components/MainProfileCard/MainProfileCardContainer';

const nNotif = 10; // just to test how notifications are shown. This works nicely

function App() {
  return (
    <div className="App">
      <GlobalStyle />
        <Router>
          {/* <MainProfileCard/> */}
          <Posts />
          {/* <PublishContainer/> */}
          {/* <MasterHeader NumberOfNotifications = {nNotif}/> */}
          {/* <CopyrightContainer label={'Motion 2018. All rights reserved'}/>
          <QuestionContainer label = {'Don\'t have an account'} value='SIGN UP'/> */}
          {/* <Switch>
            <Route path="/" exact component = { Login }>
              <Login />
            </Route>
            <Route path="/signupform" exact component = { SignUpFormPage }>
              <SignUpFormPage />
            </Route>
            <Route exact path="/signupconfirm" exact component = { SignUpConfirmPage }>
              <SignUpConfirmPage />
            </Route>
            <Route exact path="/signupverify" exact component = { SignUpVerifyPage }>
              <SignUpVerifyPage />
            </Route>
          </Switch> */}
        </Router>
    </div>
  );
}

export default App;
