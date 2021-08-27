import React, { useContext } from "react";
import classes from "./ReservationUser.module.css";
import Description from "../Description/Description";
import Form from "../Form/Form";
import MapView from "../MapView/MapView";
import ConfirmButton from "../ConfirmButton/ConfirmButton";
import ReservationContext from "../../store/ReservationContext";

const ReservationUser = ({ toggle }) => {
  const { description } = useContext(ReservationContext);
  return (
    <div className={classes["reservation-user"]}>
      <div className={classes["reservation-main"]}>
        <div className={classes["reservation-presentation"]}>
          <div className={classes["reservation-description"]}>
            <Description title={description.title} text={description.text} />
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
