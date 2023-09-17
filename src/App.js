import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import Jewelry from './components/Jewelry'
import Electronics from './components/Electronics'
import Mens from './components/Mens'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/products" component={Jewelry} />
      <Route exact path="/cart" component={Electronics} />
      <Route exact path="/mens" component={Mens} />
    </Switch>
  </BrowserRouter>
)

export default App
