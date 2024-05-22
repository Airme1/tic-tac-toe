const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({onSelect, playerSymbol}) {
  // const [gameBoard, setGameBoard] = useState(initialBoard);

  // function handleSelectSquare(rowIndex, colIndex) {
    // setGameBoard((prevBoard) => {
      // const updatedBoard = [...prevBoard.map((innerArray) => [...innerArray])];
      // updatedBoard[rowIndex][colIndex] = playerSymbol;
      // return updatedBoard;
    // });
// 
    // onSelect();
  // }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={onSelect}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
