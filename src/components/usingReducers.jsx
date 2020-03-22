import React, { useReducer } from "react";

function itemReducer(state, action) {}

const initialState = [];

const UsingReducers = () => {
  const [state, dispatch] = useReducer(itemReducer, initialState);
  return <div>UsingReducers</div>;
};

export default UsingReducers;
