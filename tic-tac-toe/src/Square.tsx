import React, { MouseEventHandler } from "react";
import InputType from "./InputType";

function Square({ squareNum,  inputValue, clickAction } : { squareNum: number, inputValue: InputType, clickAction: MouseEventHandler }) {

    console.log(`Move played on square ${squareNum}!`);
    return <button className="square" onClick={clickAction}>{inputValue}</button>
}

export default Square;