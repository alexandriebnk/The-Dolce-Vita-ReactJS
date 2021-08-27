import React from "react";
import classes from "./CustomTimeInput.module.css";
import datas from "../../assets/datas";

const CustomTimeInput = () => {
  const hours = ["12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22"];
  const minutes = ["00", "15", "30", "45"];
  return (
    <div className={classes.time}>
      <img
        src={datas.reservation.icons.time.icon}
        alt="time"
        draggable="false"
      />
      <div className={classes.hours}>
        <select>
          {hours.map((item, index) => 
            <option key={`key-${item}-${index}`} value={item}>{item}</option>
          )}
        </select>
      </div>
      <p className={classes.separator}> : </p>
      <div className={classes.minutes}>
        <select>
        {minutes.map((item, index) => 
            <option key={`key-${item}-${index}`} value={item}>{item}</option>
          )}
        </select>
      </div>
      <p className={classes.pm}>pm</p>
    </div>
  );
};

export default CustomTimeInput;
