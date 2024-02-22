
import homeLogo from '../../assets/home.jpeg'
import './Home.css';

function Home() {
    return (
        <>
        <div className="flex justify-center min-h-[79vh]">
          <div className='container grid grid-cols-2 text-gray-800'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Seja bem Miau!</h2>
              <p className='text-xl'>Expresse aqui seus roms roms e miaus! </p>
  
              <div className="flex justify-around gap-4">
              
                <button className='rounded bg-amber-500 hover:bg-amber-600   text-gray-800 font-semibold py-2 px-4'>Ver postagens</button>
              </div>
            </div>
  
            <div className="flex justify-center ">
              <img src={homeLogo} alt="" className='wh-2/3' />
      
            </div>
          </div>
        </div>
        
      </>
    );
}

export default Home;
