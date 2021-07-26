import React from "react";
import classes from "./ReservationUser.module.css";
import Description from "../Description/Description";
import Form from "../Form/Form";
import MapView from "../MapView/MapView";
import ConfirmButton from "../ConfirmButton/ConfirmButton";

const ReservationUser = ({ toggle }) => {
  return (
    <div className={classes["reservation-user"]}>
      <div className={classes["reservation-main"]}>
        <div className={classes["reservation-presentation"]}>
          <div className={classes["reservation-description"]}>
            <Description />
          </div>
          <div className={classes["reservation-form"]}>
            <Form />
          </div>
        </div>
        <div className={classes["reservation-btn"]}>
          <ConfirmButton toggle={toggle} />
        </div>
      </div>
      <div className={classes["reservation-map"]}>
        <MapView />
      </div>
    </div>
  );
};

export default ReservationUser;
