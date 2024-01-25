import React from "react";
import InputType from "./InputType";

function Square({ squareNum,  moveInputValue, setNextInput } : { squareNum: number, moveInputValue: InputType, setNextInput: React.Dispatch<React.SetStateAction<InputType>> }) {
    const [curValue, setCurValue] = React.useState(InputType.Empty);

    function onTap() {
        if(moveInputValue === InputType.Empty) throw Error;

        if(curValue !== InputType.Empty) return;

        const nextInput = (moveInputValue === InputType.O) ? InputType.X: InputType.O;

        setCurValue(moveInputValue);
        setNextInput(nextInput);
    }


    console.log(`Move played on square ${squareNum}!`);
    

    return <button className="square" onClick={onTap}>{curValue}</button>
}

export default Square;