import "./App.css";
import Home from "./Pages/Home/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Notfound from "./Pages/Notfound/Notfound";
import Booking from "./Pages/Home/Details/Details";
import Login from "./Pages/Login/Login";
import Header from "./Pages/Shared/Header/Header";
import AuthProvider from "./context/AuthProvider";
import PrivateRouter from "./Pages/Login/PrivateRouter/PrivateRouter";
import About from "./Pages/About/About";
import Footer from "./Pages/Shared/Footer/Footer";


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRouter path="/details/:detailsId">
            <Booking></Booking>
          </PrivateRouter>
          <Route path="*">
            <Notfound/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
