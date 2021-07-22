import React from "react";
import classes from "./ReservationUser.module.css";
import Description from "../Description/Description";
import Form from "../Form/Form";
import MapView from "../MapView/MapView";

const ReservationUser = ({ toggle }) => {
  return (
    <div className={classes["reservation-user"]}>
      <div className={classes["reservation-presentation"]}>
        <div className={classes["reservation-id"]}>
          <Description />
          <div className={classes["reservation-form"]}>
            <Form toggle={toggle} />
          </div>
        </div>
      </div>
      <MapView />
    </div>
  );
};

export default ReservationUser;
