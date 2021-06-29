import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import TechDoc from "./Components/TechDoc";


function App() {
  return (
    <div className='app'>
      <Router >
        <TechDoc />
      </Router>
    </div>
  );
}

export default App;
