import React from "react";
import * as C from "./styles";

const ButtonBack = ({ Text, onClick, Type = "button" }) => {
  return (
    <C.ButtonBack type={Type} onClick={onClick}>
      {Text}
    </C.ButtonBack>
  );
};

export default ButtonBack;