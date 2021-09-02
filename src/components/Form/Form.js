import React, { useContext } from "react";
import classes from "./Form.module.css";
import CustomGuestsInput from "../CustomGuestsInput/CustomGuestsInput";
import CustomDateInput from "../CustomDateInput/CustomDateInput";
import CustomTimeInput from "../CustomTimeInput/CustomTimeInput";
import Input from "../Input/Input";
import ReservationContext from "../../store/ReservationContext";

const Form = () => {
  const {
    icons: { name, phone, email },
  } = useContext(ReservationContext);

  return (
    <form className={classes.form}>
      <CustomGuestsInput />
      <CustomDateInput />
      <CustomTimeInput />
      <Input type="text" icon={name} placeholder="Name" />
      <Input type="tel" icon={phone} placeholder="650-560-75644" />
      <Input type="email" icon={email} placeholder="your@email.com" />
    </form>
  );
};

export default Form;
