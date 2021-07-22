import React, { useState, useEffect } from "react";
import classes from "./Input.module.css";
import NameImg from "../../assets/svg/name.svg";
import PhoneImg from "../../assets/svg/phone.svg";
import EmailImg from "../../assets/svg/email.svg";

const Input = (props) => {
  const [inputDatas, setInputDatas] = useState({
    src: NameImg,
    alt: "name",
    placeholder: "Name",
  });

  useEffect(() => {
    switch (props.type) {
      case "text":
        setInputDatas({ src: NameImg, alt: "name", placeholder: "Name" });
        break;
      case "tel":
        setInputDatas({
          src: PhoneImg,
          alt: "tel",
          placeholder: "650-560-75644",
        });
        break;
      case "email":
        setInputDatas({
          src: EmailImg,
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
        className={classes["input-img"]}
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
