import Square from "./Square";

function Board() {
    const boardSquares : Array<JSX.Element> = [];

    for(let i = 0; i < 3; i++) {
        const rowSquares : Array<JSX.Element> = [];
        for(let j = 0; j < 3; j++) {
            rowSquares.push(<Square key={`square-${3*i+j}}`}/>);
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