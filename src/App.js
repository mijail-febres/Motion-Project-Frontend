import CopyrightContainer from "./Pages/Login/Copyright";
import QuestionContainer from "./Pages/Login/QuestionTop";
function App() {
  return (
    <div className="App">
      <QuestionContainer label = {'Don\'t have an account'} value='SIGN UP'/>
      <CopyrightContainer label = {'Motion 2018. All rights reserved'}/>
    </div>
  );
}

export default App;
