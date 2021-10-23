import { container } from "./Square.module.css";

const Square = ({ number, handleClick }) => {
  return (
    <button className={container} onClick={handleClick}>
      {number}
    </button>
  );
};

export default Square;
