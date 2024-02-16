import Home from "./paginas/home/Home";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [valor, setValor] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [tarefa, setTarefa] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (completed) {
      setTarefa("Parabéns! Você concluiu a tarefa!");
    }
  }, [completed]);

  function handleClick() {
    setValor(valor + 1);
  }

  return (
    <>
      <Home
        title={"Componente home"}
        description={"Este é um componente home que recebe props"}
      />

    <h1 className="text-3xl font-bold text-green-500 underline text-center">
      Hello world!
    </h1> 

      <p>O valor é: {valor}</p>
      <button onClick={handleClick}>Clique aqui para adicionar 1</button>

      <div>
        <h2>Tarefa</h2>
        <h3>{tarefa}</h3>
        <p>Conclua a tarefa:</p>
        <button onClick={() => setCompleted(true)}>Concluir Tarefa</button>
      </div>

      <br />

      <div>
      {loggedIn ? (
        <h1>Bem-vindo de volta!</h1>
      ) : (
        <button onClick={() => setLoggedIn(true)}>Entrar</button>
      )}
    </div>
    </>
  );
}

export default App;
