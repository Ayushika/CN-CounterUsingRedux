/** @format */

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increement, decreement } from "./counterAction";

const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector((s) => s.counter);

  return (
    <center>
      <button onClick={() => dispatch(increement(value))}> + </button>
      <h2>{value}</h2>
      <button onClick={() => dispatch(decreement(value))}> - </button>
    </center>
  );
};

export default Counter;
