import React, { useState, useEffect } from "react";
import classes from "./Input.module.css";
import PeopleImg from "../../assets/svg/guests.svg";
import CalendarImg from "../../assets/svg/calendar.svg";
import ClockImg from "../../assets/svg/clock.svg";
import NameImg from "../../assets/svg/name.svg";
import PhoneImg from "../../assets/svg/phone.svg";
import EmailImg from "../../assets/svg/email.svg";

const Input = (props) => {
  console.log(props);
  const [imageSrc, setImageSrc] = useState({ src: PeopleImg, alt: "guests" });

  useEffect(() => {
    switch (props.type) {
      case "number":
        setImageSrc({ src: PeopleImg, alt: "guests" });
        break;
      case "date":
        setImageSrc({ src: CalendarImg, alt: "calendar" });
        break;
      case "time":
        setImageSrc({ src: ClockImg, alt: "time" });
        break;
      case "text":
        setImageSrc({ src: NameImg, alt: "name" });
        break;
      case "tel":
        setImageSrc({ src: PhoneImg, alt: "tel" });
        break;
      case "email":
        setImageSrc({ src: EmailImg, alt: "email" });
        break;
      default:
        break;
    }
  }, [props.type]);

  return (
    <div className={classes.input}>
      <img src={imageSrc.src} alt={imageSrc.alt} />
      <input className={classes.inputUI} {...props} />
    </div>
  );
};

export default Input;
