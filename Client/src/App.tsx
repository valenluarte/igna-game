import { useEffect, useRef } from "react";
import { StartGame } from "./game/Game";

function App() {
  const gameCreated = useRef(false);

  useEffect(() => {
    if (!gameCreated.current) {
      StartGame("game-container");
      gameCreated.current = true;
    }
  }, []);

  return (
    <div
      id="game-container"
      style={{
        width: "800px",
        height: "600px",
        margin: "0 auto",
      }}
    />
  );
}

export default App;