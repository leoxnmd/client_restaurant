import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
          <Route path="/">
            <Header />
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
