import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Content from "./components/Content/Content";
import Home from "./components/Home/Home";
import ReservationFrame from "./components/ReservationFrame/ReservationFrame";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Footer from "./components/Footer/Footer";
import NavigationContext from "./store/NavigationContext";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, [setIsLoaded]);

  useEffect(() => {
    if (menuIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuIsOpen]);

  return (
    <NavigationContext.Provider
      value={{
        isLoaded,
        setIsLoaded,
        menuIsOpen,
        setMenuIsOpen,
      }}
    >
      <Router>
        <Header />
        <Menu />
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/book-a-table" component={ReservationFrame} />
            <Route path="/menu/:category" component={Content} />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </NavigationContext.Provider>
  );
}

export default App;
