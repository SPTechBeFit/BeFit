import React from "react";
import * as C from "./styles";

const ButtonNext = ({ Text, onClick, Type = "button" }) => {
  return (
    <C.ButtonNext type={Type} onClick={onClick}>
      {Text}
    </C.ButtonNext>
  );
};

export default ButtonNext;