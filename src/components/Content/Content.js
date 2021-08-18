import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import classes from "./Content.module.css";
import Slider from "../Slider/Slider";
import Grid from "../Grid/Grid";
import datas from "../../assets/datas";

const Content = () => {
  const { category } = useParams();

  const [windowWidth, setWindowWidth] = useState(0);

  const onResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
    onResize();

    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className={classes.content}>
      {windowWidth <= 768 ? (
        <Grid datas={datas.menu[category]} />
      ) : (
        <Slider datas={datas.menu[category]} />
      )}
    </div>
  );
};

export default Content;
