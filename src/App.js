import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import { useEffect, useState } from "react";

function App() {
  const [pieces, setPieces] = useState(200);
  useEffect(() => {
    const timer = setTimeout(() => {
      setPieces(0);
    }, 15000);
    return () => clearTimeout(timer);
  }, []);

  const { width, height } = useWindowSize();
  return <Confetti width={width} height={height} numberOfPieces={pieces} />;
}

export default App;
