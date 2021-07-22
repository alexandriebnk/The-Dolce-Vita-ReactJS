import React from "react";
import classes from "./CustomTimeInput.module.css";
import ClockImg from "../../assets/svg/clock.svg";

const CustomTimeInput = () => {
  return (
    <div className={classes.time}>
      <img src={ClockImg} alt="clock" className={classes["time-img"]} />
      <div className={classes.hours}>
        <select>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
        </select>
      </div>
      <p className={classes.separator}> : </p>
      <div className={classes.minutes}>
        <select>
          <option value="00">00</option>
          <option value="15">15</option>
          <option value="30">30</option>
          <option value="45">45</option>
        </select>
      </div>
      <p>pm</p>
    </div>
  );
};

export default CustomTimeInput;
