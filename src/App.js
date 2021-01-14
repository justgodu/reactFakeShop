import logo from './logo.svg';
import './App.css';
import Shop from "./Pages/Shop/Shop";
import Main from "./Pages/Main/Main";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";
import SingleCategory from "./Pages/SingleCategory/SingleCategory";
import Checkout from "./Pages/Checkout/Checkout";
import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from "./Header/Header";
import AboutMe from "./Pages/AboutMe/AboutMe";
function App() {
    const [theme, setTheme] = useState("light");

    function handleThemeChange(){

       setTheme(theme == "light" ? "dark" : "light");
       //  console.log("changd")
    }

  return (
      <div className={theme}>
      <Router>
        <Header changeTheme={handleThemeChange}/>
        <main>
        <Switch>
          <Route path={"/shop"}>
            <Shop/>
          </Route>
            <Route path={"/aboutme"}>
                <AboutMe/>
            </Route>
            <Route path={"/product/:id"}>
                <SingleProduct/>
            </Route>
            <Route path={"/category/:slug"}>
                <SingleCategory/>
            </Route>
            <Route path={"/checkout/:id"}>
                <Checkout/>
            </Route>

            <Route path={"/"}>
                <Main/>
            </Route>

        </Switch>
        </main>
      </Router>
      </div>
  );
}

export default App;
