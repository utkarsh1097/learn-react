import React from "react";
import Square from "./Square";
import InputType from "./InputType";

function Board() {
    // When we initialize the board, we start with InputType X
    const [nextInput, setNextInput] = React.useState(InputType.X);

    // We maintain the states of each square at Board level in order to be able to keep track of the winning state
    const [boardState, setBoardState] = React.useState(Array<InputType>(9).fill(InputType.Empty));

    function checkWinner() {
        console.log("Checking winner!");
    }

    function onPlay(index: number) {
        const nextBoardState = boardState.slice();
        nextBoardState[index] = nextInput;

        const newNextInput = (nextInput === InputType.O) ? InputType.X: InputType.O;

        setNextInput(newNextInput);
        setBoardState(nextBoardState);
    }

    const boardSquares : Array<JSX.Element> = [];

    for(let i = 0; i < 3; i++) {
        const rowSquares : Array<JSX.Element> = [];
        for(let j = 0; j < 3; j++) {
            const squareNum = 3*i+j;
            rowSquares.push(<Square squareNum={squareNum} inputValue={boardState[squareNum]} clickAction={() => { console.log(`Move played on square ${squareNum}!`); onPlay(squareNum)}} key={`square-${3*i+j}}`}/>);
        }
        boardSquares.push(<div key={`row-${i}`}>{rowSquares}</div>);
    }

    // JSX.Element[] -> JSX.Element. Empty tags ok for the conversion
    return (
        <div className="board">
            {boardSquares}
        </div>
    );
}

export default Board;