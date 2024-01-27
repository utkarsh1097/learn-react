import React, { MouseEventHandler } from "react";
import InputType from "./InputType";

function Square({ squareNum,  inputValue, clickAction } : { squareNum: number, inputValue: InputType, clickAction: MouseEventHandler }) {
    return <button className="square" onClick={clickAction}>{inputValue}</button>
}

export default Square;