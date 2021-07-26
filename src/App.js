import React, { Fragment, useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import ReservationFrame from "./components/ReservationFrame/ReservationFrame";

function App() {
  const [menuIsDisplayed, setMenuIsDisplayed] = useState(false);

  const displayMenu = () => {
    setMenuIsDisplayed(!menuIsDisplayed);
  };

  return (
    <Fragment>
      <Header displayMenu={displayMenu} menuIsDisplayed={menuIsDisplayed} />
      <div>{menuIsDisplayed ? <Menu /> : null}</div>
      <ReservationFrame />
      <Footer />
    </Fragment>
  );
}

export default App;
