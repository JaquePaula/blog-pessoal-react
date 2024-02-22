import CardTemas from "../cardTemas/CardTemas";
import Tema from "../../../models/Tema";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { buscar } from "../../../services/Services";
import loading from "../../../assets/loading.gif";

function ListaTemas() {
  const [temas, setTemas] = useState<Tema[]>([]);

  const navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarTemas() {
    try {
      await buscar("/temas", setTemas, {
        headers: { Authorization: token },
      });

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.toString().includes("403")) {
        alert("O token expirou, favor logar novamente");
        handleLogout();
      }
    }
  }

  useEffect(() => {
    if (token === "") {
      alert("Você precisa estar logado");
      navigate("/login");
    }
  }, [token]);

  useEffect(() => {
    buscarTemas();
  }, [temas.length]);

  return (
    <>
      {temas.length === 0 ? (
        <div className="flex justify-center align-middle pt-80">
          <img src={loading} alt="" />
        </div>
      ) : (
        <div className="flex justify-center w-full my-4 h-full">
          <div className="container flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {temas.map((tema) => (
                <>
                  <CardTemas key={tema.id} tema={tema} />
                </>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ListaTemas;
