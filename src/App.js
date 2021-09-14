import Login from './Pages/Login/Login';
import QuestionContainer from "./Pages/Login/QuestionTop";
import PublishContainer from '../src/Components/PublishSomething/PublishSomething';

function App() {
  return (
    <div className="App">
      <PublishContainer/>
      <QuestionContainer label = {'Don\'t have an account'} value='SIGN UP'/>
      <Login />
    </div>
  );
}

export default App;
