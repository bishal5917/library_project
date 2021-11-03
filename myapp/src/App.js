
import './App.css';
import Login from './Login.js'
import Navbar from './Navbar.js'
import Main from './Main.js'
import Details from './Details.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
    return( <> 
    <Router>
      <Switch>
        <Route exact path="/Login" component={Login}/>
        <Route exact path="/" component={Login}/>
        <Route exact path="/Navbar" component={Navbar}/>
        <Route exact path="/Main" component={Main}/>
        <Route exact path="/Details" component={Details}/>
      </Switch>
      </Router>
</>
  )}

export default App;

