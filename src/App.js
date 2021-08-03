import React, { Fragment, useState } from "react";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Carrousel from "./components/Carrousel/Carrousel";
import Footer from "./components/Footer/Footer";
import classes from "./App.module.css";
{
  /*
import Slider from "./components/Slider/Slider";
import Grid from "./components/Grid/Grid";
import ReservationFrame from "./components/ReservationFrame/ReservationFrame";
*/
}

function App() {
  const [menuIsDisplayed, setMenuIsDisplayed] = useState(false);

  const displayMenu = () => {
    setMenuIsDisplayed(!menuIsDisplayed);
  };

  return (
    <Fragment>
      <Header displayMenu={displayMenu} menuIsDisplayed={menuIsDisplayed} />
      <div>{menuIsDisplayed ? <Menu /> : null}</div>
      <main className={classes.content}>
        <Carrousel />
        {/*<ReservationFrame />
        <div className={classes["wrapper-content"]}>
          <Slider />
          <Grid />
        </div>*/}
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
