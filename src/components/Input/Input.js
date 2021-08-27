import React, { useState, useEffect } from "react";
import classes from "./Input.module.css";
import datas from "../../assets/datas";

const Input = (props) => {
  const [inputDatas, setInputDatas] = useState({
    src: datas.reservation.icons.name.icon,
    alt: "name",
    placeholder: "Name",
  });

  useEffect(() => {
    switch (props.type) {
      case "text":
        setInputDatas({
          src: datas.reservation.icons.name.icon,
          alt: "name",
          placeholder: "Name",
        });
        break;
      case "tel":
        setInputDatas({
          src: datas.reservation.icons.phone.icon,
          alt: "tel",
          placeholder: "650-560-75644",
        });
        break;
      case "email":
        setInputDatas({
          src: datas.reservation.icons.email.icon,
          alt: "email",
          placeholder: "your@email.com",
        });
        break;
      default:
        break;
    }
  }, [props.type]);

  return (
    <div className={classes.input}>
      <img
        src={inputDatas.src}
        alt={inputDatas.alt}
        draggable="false"
      />
      <input
        className={classes["input-element"]}
        {...props}
        placeholder={inputDatas.placeholder}
      />
    </div>
  );
};

export default Input;
