import CopyrightContainer from './Pages/Login/Copyright';
import MasterHeader from './Components/Posts/Header/Header';
import Login from './Pages/Login/Login';
import { GlobalStyle } from './Styles';
import QuestionContainer from "./Components/Login/QuestionTop/QuestionTop";
import Posts from './Pages/Posts/Posts';
import PublishContainer from '../src/Components/PublishSomething/PublishSomething';

const nNotif = 10; // just to test how notifications are shown. This works nicely

function App() {
  return (
    <div className="App">
      {/* <GlobalStyle />
      <PublishContainer/>
      <MasterHeader NumberOfNotifications = {nNotif}/>
      <CopyrightContainer label ={'Motion 2018. All rights reserved'}/>
      <QuestionContainer label = {'Don\'t have an account'} value='SIGN UP'/>
      <Login /> */}
      <Posts />
    </div>
  );
}

export default App;
