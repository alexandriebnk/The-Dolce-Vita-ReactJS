import React from "react";
import classes from "./Form.module.css";
import CustomGuestsInput from "../CustomGuestsInput/CustomGuestsInput";
import CustomDateInput from "../CustomDateInput/CustomDateInput";
import CustomTimeInput from "../CustomTimeInput/CustomTimeInput";
import Input from "../Input/Input";

const Form = () => {
  return (
    <form className={classes.form}>
      <CustomGuestsInput />
      <CustomDateInput />
      <CustomTimeInput />
      <Input id="name" type="text" />
      <Input id="phone" type="tel" />
      <Input id="email" type="email" />
    </form>
  );
};

export default Form;
