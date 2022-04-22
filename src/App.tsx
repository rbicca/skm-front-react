import { BrowserRouter, Route, Switch } from "react-router-dom";
import configureValidations from "./forms/Validations";
import Menu from "./Menu";
import routes from './route-config';

configureValidations();

function App() {

  return (
    <BrowserRouter>
      <Menu />
      <div className="container">
        <Switch>
            {routes.map(route => 
              <Route key={route.path} path={route.path} exact={route.exact}>
                <route.component />
              </Route>
            )}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
