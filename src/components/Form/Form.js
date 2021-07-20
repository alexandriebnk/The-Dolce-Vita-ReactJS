import React from "react";
import classes from "./Form.module.css";
import Input from "../Input/Input";

const Form = () => {
  return (
    <div>
      <form className={classes.form}>
        <Input
          id="guests"
          type="number"
          min="1"
          max="5"
          step="1"
          defaultValue="1"
        />
        <Input id="date" type="date" />
        <Input id="time" type="time" />
        <Input id="name" type="text" />
        <Input id="phone" type="tel" />
        <Input id="email" type="email" />
        <input
          className={classes["confirm-btn"]}
          type="submit"
          value="CONFIRM RESERVATION"
        ></input>
      </form>
    </div>
  );
};

export default Form;
