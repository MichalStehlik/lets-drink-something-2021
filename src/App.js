import './App.css';
import { Router } from "react-router-dom";
import { Route, Switch } from "react-router";
import { createBrowserHistory } from "history";
import Menu from "./components/Menu";
import Content from "./components/Content";
import Title from "./components/Title";
import Detail from "./components/Detail";
import About from "./components/About";
import NotFound from "./components/NotFound";

const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Menu />
        <Content>
          <Switch>         
            <Route path="/about" component={About} />
            <Route exact path="/" component={Title} />
            <Route path="/detail/:id" component={Detail} />
            <Route component={NotFound} />
          </Switch>
        </Content>  
      </Router>  
    </div>
  );
}

export default App;
