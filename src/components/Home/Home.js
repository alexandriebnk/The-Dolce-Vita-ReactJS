import React from "react";
import Carrousel from "../Carrousel/Carrousel";
import CarrouselMobile from "../CarrouselMobile/CarrouselMobile";

const Home = () => (
  <div>{window.innerWidth <= 576 ? <CarrouselMobile /> : <Carrousel />}</div>
);

export default Home;
