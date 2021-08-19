import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";

import Content from "./components/Content/Content";
import Carrousel from "./components/Carrousel/Carrousel";

import Footer from "./components/Footer/Footer";

import ReservationFrame from "./components/ReservationFrame/ReservationFrame";
{
  /*
  import CarrouselMobile from "./components/CarrouselMobile/CarrouselMobile";
  import ReservationFrame from "./components/ReservationFrame/ReservationFrame";
*/
}

function App() {
  const [menuIsDisplayed, setMenuIsDisplayed] = useState(false);

  const displayMenu = () => {
    setMenuIsDisplayed(!menuIsDisplayed);
  };

  useEffect(() => {
    if (menuIsDisplayed) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuIsDisplayed]);

  return (
    <Router>
      <Header displayMenu={displayMenu} menuIsDisplayed={menuIsDisplayed} />
      {menuIsDisplayed ? <Menu /> : null}
      <main>
        <Switch>
          <Route path="/" exact component={Carrousel} />
          <Route path="/book-a-table" component={ReservationFrame} />
          <Route path="/menu/:category" component={Content} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
