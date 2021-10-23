import { container } from "./App.module.css";
import Board from "./Components/Board/Board";

function App() {
  return (
    <div className={container}>
      <Board />
    </div>
  );
}

export default App;
