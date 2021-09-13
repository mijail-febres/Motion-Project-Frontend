import Login from './Pages/Login/Login';
import QuestionContainer from "./Pages/Login/QuestionTop";

function App() {
  return (
    <div className="App">
      <QuestionContainer label = {'Don\'t have an account'} value='SIGN UP'/>
      <Login />
    </div>
  );
}

export default App;
