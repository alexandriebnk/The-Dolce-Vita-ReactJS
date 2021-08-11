import React from "react";
import classes from "./BookingLink.module.css";
import { Link } from "react-router-dom";

const BookingLink = () => {
  return (
    <div className={classes["booking-link"]}>
      <Link to="/book-a-table" className={classes.link}>
        BOOK A TABLE
      </Link>
    </div>
  );
};

export default BookingLink;
