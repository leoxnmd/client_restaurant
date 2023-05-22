import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

function App() {
  const isLogin = localStorage.getItem('isLoggedIn');
  console.log(isLogin);
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
          <Route path="/home">
            <Header />
            <Route path="/home" exact>
              <Home />
            </Route>
            <Route path="/home/cart">
              <Cart />
            </Route>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
