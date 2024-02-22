import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'

function NavBar() {
  const navigate = useNavigate()

  const { usuario, handleLogout } = useContext(AuthContext)

function logout() {
  handleLogout()
  alert ('Deslogado com sucesso')
  navigate('/login')
}
let navbarComponent

if(usuario.token !== "") {
   navbarComponent = (

      <div className="w-full  bg-amber-50 text-gray-700 flex justify-center py-4">
        <div className="container flex justify-between text-lg">

          <Link to='home' className="text-2xl font-bold uppercase text-amber-700">Blog Pessoal Pet </Link>

          <div className="flex gap-4">
            <Link to='/postagens' className=" text-amber-700 hover:underline  ">Postagens</Link>

            <Link to='/temas' className='text-amber-700 hover:underline '>Temas</Link>
            <Link to='/cadastroTema' className="text-amber-700 hover:underline">Cadastrar tema</Link>
            <div className="text-amber-700 hover:underline">Perfil</div>
            <Link to='' onClick={logout} className='text-amber-700 hover:underline'>Sair</Link>
          </div>
        </div>
      </div>
  )
}
return (
  <>
   {navbarComponent}
    </>
  );
}

export default NavBar;
