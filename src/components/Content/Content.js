import React from "react";
import classes from "./Content.module.css";
import Slider from "../Slider/Slider";
import Grid from "../Grid/Grid";
import { useParams } from "react-router-dom";
import list from "../../assets/list";

const Content = () => {
  const { category } = useParams();

  return (
    <div className={classes.content}>
      <Slider datas={list[category]} category={category} />
    </div>
  );
};

export default Content;
