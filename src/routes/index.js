import { Switch, Route } from "react-router-dom";
import AboutUs from "../pages/AboutUs";
import Dashboard from "../pages/Dashboard";
import Groups from "../pages/Groups";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Register from "../pages/Register";
import SpecificGroup from "../pages/SpecificGroup";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/specificgroup">
        <SpecificGroup />
      </Route>
      <Route path="/groups">
        <Groups />
      </Route>
      <Route path="/aboutus">
        <AboutUs />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
};
export default Routes;
