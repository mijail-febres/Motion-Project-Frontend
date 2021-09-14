import CopyrightContainer from './Pages/Login/Copyright';
import MasterHeader from './Pages/Login/Header';
import Login from './Pages/Login/Login';
import QuestionContainer from "./Pages/Login/QuestionTop";
import Posts from './Pages/Posts/Posts';

const nNotif = 10; // just to test how notifications are shown. This works nicely

function App() {
  return (
    <div className="App">
      {/* <MasterHeader NumberOfNotifications = {nNotif}/> */}
      {/* <CopyrightContainer label ={'Motion 2018. All rights reserved'}/> */}
      {/* <QuestionContainer label = {'Don\'t have an account'} value='SIGN UP'/> */}
      {/* <Login /> */}
      <Posts />
    </div>
  );
}

export default App;
