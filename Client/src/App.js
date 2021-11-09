import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar";
import Data from "./components/Data";
import "bootstrap/dist/css/bootstrap.min.css";
import NotFound from "./NotFound";
import EditUser from "./pages/EditUser/EditUser";
function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    setIsAuth(localStorage.getItem("loggedIn"));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/data" exact render={() => <Data />} />
          <Route path="/login" exact render={() => <Login />} />
          <Route path="/register" exact render={() => <Register />} />
          <Route exact path="/edit/:id" component={EditUser} />
          <Route path="*" exact={true} component={NotFound} />

          {/* <ProtectedRoute path="/table" component={Admin} isAuth={isAuth} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
