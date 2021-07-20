import React, { Fragment } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ReservationFrame from "./components/Reservation/ReservationFrame";

function App() {
  return (
    <Fragment>
      <Header />
      <ReservationFrame />
      <Footer />
    </Fragment>
  );
}

export default App;
