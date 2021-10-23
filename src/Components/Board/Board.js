import Square from "../Square/Square";
import { container, row } from "./Board.module.css";
import { useState } from "react";

const Board = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState("");

  const handleClick = (i) => {
    if (!squares[i] && !calculateWinner(squares)) {
      if (xIsNext) {
        squares[i] = "X";
        setXIsNext(false);
      } else {
        squares[i] = "O";
        setXIsNext(true);
      }
    }
    setSquares([...squares]);
    calculateWinner(squares);
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        setWinner("The winner is " + squares[a]);
        return squares[a];
      }
    }

    return false;
  };

  return (
    <div className={container}>
      <div className={row}>
        <Square number={squares[0]} handleClick={() => handleClick(0)} />
        <Square number={squares[1]} handleClick={() => handleClick(1)} />
        <Square number={squares[2]} handleClick={() => handleClick(2)} />
      </div>
      <div className={row}>
        <Square number={squares[3]} handleClick={() => handleClick(3)} />
        <Square number={squares[4]} handleClick={() => handleClick(4)} />
        <Square number={squares[5]} handleClick={() => handleClick(5)} />
      </div>
      <div className={row}>
        <Square number={squares[6]} handleClick={() => handleClick(6)} />
        <Square number={squares[7]} handleClick={() => handleClick(7)} />
        <Square number={squares[8]} handleClick={() => handleClick(8)} />
      </div>
      <div>{winner}</div>
    </div>
  );
};

export default Board;
