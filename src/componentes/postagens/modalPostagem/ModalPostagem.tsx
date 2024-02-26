
import FormularioPostagem from '../formularioPostagem/FormularioPostagem';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './ModalPostagem.css'


function ModalPostagem() {
  return (
    <>
      <Popup 
      trigger={<button className='rounded bg-amber-500 hover:bg-amber-600   text-gray-800 font-semibold py-2 px-4'>Nova postagem</button>} modal>
        <div>
          <FormularioPostagem />
        </div>
      </Popup>
    </>
  );
}

export default ModalPostagem;