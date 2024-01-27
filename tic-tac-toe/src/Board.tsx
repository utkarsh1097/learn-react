import React from "react";
import Square from "./Square";
import InputType from "./InputType";

function Board() {
    // When we initialize the board, we start with InputType X
    const [nextInput, setNextInput] = React.useState(InputType.X);

    // We maintain the states of each square at Board level in order to be able to keep track of the winning state
    const [boardState, setBoardState] = React.useState(Array<InputType>(9).fill(InputType.Empty));

    const [gameWinner, setGameWinner] = React.useState(InputType.Empty);


    const checkWinner = React.useCallback(() => {
        console.log("Checking winner!");


        for(let inputType in InputType) {
            if(inputType === InputType.Empty) continue;

            console.log(`InputType=${inputType}`);

            for(let i = 0; i < 3; i++) {
                // Assume that the row is complete and check if it actually isn't
                let isRowComplete: boolean = true;
                for(let j = 0; j < 3; j++) {
                    if(inputType !== boardState[3*i+j]) {
                        isRowComplete = false;
                    }
                }
                if(isRowComplete) {
                    // We found the winner
                    const winner = (nextInput === InputType.X) ? InputType.O : InputType.X;
                    console.log(`Winner found! Value = ${winner}`);
                    setGameWinner(winner);
                    return;
                }
                
                // Assume that the column is complete and check if it actually isn't
                let isColComplete: boolean = true;
                for(let j = 0; j < 3; j++) {
                    if(inputType !== boardState[3*j+i]) {
                        isColComplete = false;
                    }
                }
                if(isColComplete) {
                    // We found the winner
                    const winner = (nextInput === InputType.X) ? InputType.O : InputType.X;
                    console.log(`Winner found! Value = ${winner}`);
                    setGameWinner(winner);
                    return;
                }
            }
            // Assume that the diagonal is complete
            let isDiagComplete: boolean = true;
            for(let i = 0; i < 3; i++) {
                if(inputType !== boardState[3*i+i]) {
                    isDiagComplete = false;
                }
            }
            if(isDiagComplete) {
                // We found the winner
                const winner = (nextInput === InputType.X) ? InputType.O : InputType.X;
                console.log(`Winner found! Value = ${winner}`);
                setGameWinner(winner);
                return;
            }

            // Assume that the anti-diagonal is complete
            let isAntiDiagComplete: boolean = true;
            for(let i = 0; i < 3; i++) {
                if(inputType !== boardState[(3-i-1)*3+i]) {
                    isAntiDiagComplete = false;
                }
            }
            if(isAntiDiagComplete) {
                // We found the winner
                const winner = (nextInput === InputType.X) ? InputType.O : InputType.X;
                console.log(`Winner found! Value = ${winner}`);
                setGameWinner(winner);
                return;
            }
        }
    }, [boardState, nextInput]);

    React.useEffect(() => {
        checkWinner();
        return;
    }, [checkWinner]);

    function onPlay(index: number) {
        if(gameWinner !== InputType.Empty) return;

        if(boardState[index] !== InputType.Empty) return;

        console.log(`Move played on square ${index}!`); 

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
            rowSquares.push(<Square squareNum={squareNum} inputValue={boardState[squareNum]} clickAction={() => onPlay(squareNum)} key={`square-${3*i+j}}`}/>);
        }
        boardSquares.push(<div key={`row-${i}`}>{rowSquares}</div>);
    }

    // JSX.Element[] -> JSX.Element. Empty tags ok for the conversion
    return (
        <>
            <div>
                {(gameWinner === InputType.Empty) ? "" : `The winner of the game is: ${gameWinner}!`}
            </div>
            <div className="board">
                {boardSquares}
            </div>
        </>
    );
}

export default Board;