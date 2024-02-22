import { Link } from "react-router-dom";
import Tema from "../../../models/Tema";

interface CardTemasProps {
  tema: Tema;
}

function CardTemas({ tema }: CardTemasProps) {
  return (
    <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
      <header className="py-2 px-6 bg-green-200 text-gray-800 font-bold text-2xl">
        Tema
      </header>
      <p className="p-8 text-3xl bg-gray-50 h-full">{tema.descricao}:</p>
      <div className="flex border">
        <Link
          to={`/editarTema/${tema.id}`}
          className="w-full text-teal-500 flex items-center justify-center py-2  bg-gray-100 border-r hover:bg-gray-200"
        >
          Editar
        </Link>
        <Link
          to={`/deletarTema/${tema.id}`}
          className="text-red-700 w-full flex items-center justify-center  bg-gray-100 hover:bg-gray-200"
        >
          Deletar
        </Link>
      </div>
    </div>
  );
}

export default CardTemas;
