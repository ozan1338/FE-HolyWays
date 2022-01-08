import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import DetailsPage from "./pages/DetailsPage";
import UserPage from "./pages/UserPage";
import RaiseFundPage from "./pages/RaiseFundPage";
import FormFund from "./pages/FormFund";
import ViewFund from "./pages/ViewFund";
import PrivateRoute from "./components/PrivateRoute";
import ChatPage from "./pages/ChatPage";
import ChatAdmin from "./pages/ChatAdmin";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <Router>
      <HelmetProvider>
        <Switch>
          <Route path="/" component={LandingPage} exact />
          <PrivateRoute exact path="/details/:id" component={DetailsPage} />
          <PrivateRoute exact path="/user/:id" component={UserPage} />
          <PrivateRoute exact path="/raise-fund/:id" component={RaiseFundPage} />
          <PrivateRoute exact path="/form-fund" component={FormFund} />
          <PrivateRoute exact path="/view-fund/:id" component={ViewFund} />
          <PrivateRoute exact path="/chat-page/:id/:adminId" component={ChatPage} />
          <PrivateRoute exact path="/admin-chat-page/:id" component={ChatAdmin} />
        </Switch>
      </HelmetProvider>
    </Router>
  );
}

export default App;
