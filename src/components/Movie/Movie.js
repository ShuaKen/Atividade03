import './Movie.css';

const Movie = ({ filme }) => {
    return (
        <li className='item-lista-filmes'>
            <img src={filme.imagem} alt={filme.titulo} />
            <h3>{filme.titulo}</h3>
            <p>Ano: {filme.ano}</p>
        </li>
    );
};

export default Movie;
