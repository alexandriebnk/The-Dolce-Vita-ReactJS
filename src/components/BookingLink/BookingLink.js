import React from "react";
import classes from "./BookingLink.module.css";

const BookingLink = () => {
  return (
    <div className={classes["booking-link"]}>
      <a href="#reservation" className={classes.link}>
        BOOK A TABLE
      </a>
    </div>
  );
};

export default BookingLink;
