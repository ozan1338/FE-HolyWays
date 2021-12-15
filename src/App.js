import './App.css';
import {BrowserRouter as Router , Route, Switch} from "react-router-dom";
import LandingPage from './pages/LandingPage';
import DetailsPage from './pages/DetailsPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={LandingPage} exact />
        <Route path='/details' component={DetailsPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
