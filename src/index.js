import React from "react";
import ReactDom from "react-dom";
const flname = "Dineshyaduvanshee";
ReactDom.render(
  <>
  <h1>my name is {flname}</h1>,
  <p>My lucky number is {3+5}</p>,
  <p>This is Random number {Math.random()}</p>,
  <p>my lucky number is {    }</p>
  </>,
  document.getElementById("root")

);