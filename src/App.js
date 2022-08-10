import './Main.css';
import Header from './components/Header.jsx';
import Home from './components/Home.tsx';
import Foods from './components/Foods.tsx';
import Salads from './components/Salads.tsx';
import Desserts from './components/Desserts.tsx';
import Drinks from './components/Drinks.tsx';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
     <Switch>
       <Route exact path='/'>
         <Home />
       </Route>
       <Route path='/ana-yemekler'>
         <Foods />
       </Route>
       <Route path='/salatalar'>
         <Salads />
       </Route>
       <Route path='/tatlilar'>
         <Desserts />
       </Route>
       <Route path='/icecekler'>
         <Drinks />
       </Route>
     </Switch>
    </div>
    </Router>
  );
}

export default App;
