import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./Home";
import Nav from "./Nav";
import JogoPage from "./JogoPage";
import Container from 'react-bootstrap/Container';

function App() {

  return (

    <Router>
      <Container className="App">
        <Nav />

        <Switch>

          <Route exact path={["/","/home"]}  component={Home} />
          <Route path='/game/:name' component={JogoPage} />
        </Switch>

      </Container>

    </Router>

  );
}

export default App;
