import './App.css';
import {BrowserRouter as Router , Route, Switch} from "react-router-dom";
import LandingPage from './pages/LandingPage';
import DetailsPage from './pages/DetailsPage';
import UserPage from './pages/UserPage';
import RaiseFundPage from './pages/RaiseFundPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={LandingPage} exact />
        {/* Later Add Id for detaild */}
        <Route path='/details' component={DetailsPage} exact />
        {/* Later Add id for user */}
        <Route path='/user' component={UserPage} exact />
        <Route path='/raise-fund' component={RaiseFundPage} />
      </Switch>
    </Router>
  );
}

export default App;
