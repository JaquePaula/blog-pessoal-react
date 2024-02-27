import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { buscar, deletar } from "../../../services/Services";
import Tema from "../../../models/Tema";
import { toastAlerta } from "../../../util/ToastAlerta";

function DeletarTema() {
  const [tema, setTema] = useState<Tema>({} as Tema);

  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarPorId(id: string) {
    try {
      await buscar(`/temas/${id}`, setTema, {
        headers: {
          Authorization: token,
        },
      });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.toString().includes("403")) {
        toastAlerta('O token expirou, favor logar novamente', 'info')
        handleLogout();
      }
    }
  }

  useEffect(() => {
    if (token === "") {
      toastAlerta('Você precisa estar logado', 'info')
      navigate("/login");
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function retornar() {
    navigate("/temas");
  }

  async function deletarTema() {
    try {
      await deletar(`/temas/${id}`, {
        headers: {
          Authorization: token,
        },
      });

      toastAlerta('Tema apagado com sucesso', 'sucesso')
    } catch (error) {
      toastAlerta('Erro ao apagar o Tema', 'erro')
    }

    retornar();
  }

  return (
    <div className="container w-1/3 mx-auto">
      <h1 className="text-4xl text-center my-4">Deletar tema</h1>

      <p className="text-center font-semibold mb-4">
        Você tem certeza de que deseja apagar o tema a seguir?
      </p>

      <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
        <header className="py-2 px-6  bg-green-200 text-gray-800 font-bold text-2xl">
          Tema
        </header>
        <p className="p-8 text-3xl bg-slate-200 h-full"> {tema.descricao}</p>
        <div className="flex">
          <button
            className="text-red-700 bg-gray-100 hover:bg-gray-200 w-full py-2"
            onClick={retornar}
          >
            Não
          </button>
          <button
            className="w-full text-teal-600 bg-gray-100 border-l hover:bg-gray-200 flex items-center justify-center"
            onClick={deletarTema}
          >
            Sim
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarTema;
