import * as React from "react";
import { createBrowserHistory } from "history";
import { Route, Router, Switch } from "react-router-dom";
import Routes from "./routes";

const hist = createBrowserHistory();

const App: React.FC = (): React.ReactElement => (
  <Router history={hist}>
    <Switch>
      <Route path="/" component={Routes} />
    </Switch>
  </Router>
);

export default App;
