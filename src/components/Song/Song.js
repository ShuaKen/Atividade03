import './Song.css';

const Song = ({ song }) => {
    // Verifique se `song` tem as propriedades esperadas
    if (!song || !song.video || !song.titulo || !song.artist) {
        return null; // Retorna null se não houver dados válidos
    }

    return (
        <li className='item-lista-songs'>
            <iframe 
                width="100%" 
                height="200" 
                src={song.video} 
                title={song.titulo}
                allowFullScreen
            ></iframe>
            <h3>{song.titulo}</h3>
            <p>Artista: {song.artist}</p>
        </li>
    );
};

export default Song;
