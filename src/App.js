import "./App.css";
import { useApp } from "./useApp";

function App() {
  const { message, setStartMessage, startMessage, generatePathImage, play } =
    useApp();
  return (
    <div className="parent">
      <div className="child">
        {startMessage ? (
          <>
            <div className="polaroid">
              <img className="photo" src={generatePathImage()} alt="imagem" />
            </div>

            <h1>"{message}"</h1>
          </>
        ) : (
          <>
            <div className="initial">
              <h2>
                "Nosso <span>amor</span> é como um <span>loop infinito</span>:
                uma mistura de código <span>romântico</span> e{" "}
                <span>bugs engraçados</span>, onde cada momento juntos é uma
                exceção que faz o<span> coração crashar de felicidade</span>."
              </h2>
            </div>
            <button
              onClick={() => {
                play();
                setStartMessage(true);
              }}
              className="buttonLoop"
            >
              <span className="front"> ∞ Ver nosso loop infinito ∞</span>
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
