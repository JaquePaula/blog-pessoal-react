import "./Home.css";

interface HomeProps{
  title: string;
  description: string;
}



function Home({title, description}: HomeProps) {
  return (
    <>
      <h2 className="titulo">{title}</h2>
      <p>{description}</p>
      
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
        alt="Imagem Tela Inicial"
        className="img"
      />
    </>
  );
}

export default Home;
