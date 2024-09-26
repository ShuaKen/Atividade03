import './Songs.css';
import Song from '../Song/Song.js';

const Songs = () => {
    const SongsList = [
        {
            titulo: 'Die With A Smile (feat. Bruno Mars)',
            video: 'https://www.youtube.com/embed/kPa7bsKwL-c', 
            artist: 'Lady Gaga feat. Bruno Mars'
        },
        {
            titulo: 'Forever Young',
            video: 'https://www.youtube.com/embed/oNjQXmoxiQ8',
            artist: 'Alphaville'
        },
        {
            titulo: 'CHIRIRO',
            video: 'https://www.youtube.com/embed/BY_XwvKogC8',
            artist: 'Billie Eilish'
        },
        {
            titulo: 'Alibi',
            video: 'https://www.youtube.com/embed/qVqFuokjRMc',
            artist: 'Sevdaliza feat. Pabllo Vittar & Yseult'
        },
        {
            titulo: 'Too Sweet',
            video: 'https://www.youtube.com/embed/NTpbbQUBbuo',
            artist: 'Hozier'
        }
    ];

    return (
        <section id="músicas-mais-escutadas" className='songs'>
            <h2>Melhores Músicas</h2>
            <ul className='lista-songs'>
                {SongsList.map((song, index) => (
                    <Song song={song} key={index} /> 
                ))}
            </ul>
        </section>
    );
};

export default Songs;
