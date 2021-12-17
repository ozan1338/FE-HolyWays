import './App.css';
import {BrowserRouter as Router , Route, Switch} from "react-router-dom";
import LandingPage from './pages/LandingPage';
import DetailsPage from './pages/DetailsPage';
import UserPage from './pages/UserPage';
import RaiseFundPage from './pages/RaiseFundPage';
import FormFund from './pages/FormFund';
import ViewFund from './pages/ViewFund';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={LandingPage} exact />
        <PrivateRoute exact path='/details' component={DetailsPage} />
        <PrivateRoute exact path='/user' component={UserPage} />
        <PrivateRoute exact path='/raise-fund' component={RaiseFundPage} />
        <PrivateRoute exact path='/form-fund' component={FormFund} />
        <PrivateRoute exact path='/view-fund' component={ViewFund} />
        {/* Later Add Id for detaild */}
        {/* <Route path='/details' component={DetailsPage} exact /> */}
        {/* Later Add id for user */}
      </Switch>
    </Router>
  );
}

export default App;
