import logo from './logo.svg';
import './App.css';
import Home from './components/Hemo/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import FriendInfo from './components/FriendInfo/FriendInfo';

function App() {
  return (

    <div >
      
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/id/:id">
            <FriendInfo/>

          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
