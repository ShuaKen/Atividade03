import './Movies.css'
import Movie from '../Movie/Movie.js'
const Movies = ()=>
{
    const filmes = [
        {
            titulo: 'O Poderoso Chefão',
            imagem: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/90/93/20/20120876.jpg',
            ano: 1972
        },
        {
        titulo: 'Um Sonho de Liberdade',
            imagem: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/90/16/48/20083748.jpg',
            ano: 1994
        },
        {
            titulo: 'A Lista de Schindler',
            imagem: 'https://br.web.img3.acsta.net/c_310_420/pictures/19/04/10/19/44/2904073.jpg',
            ano: 1993
        },
        {
            titulo:'Forrest Gump - O Contador de Histórias',
            imagem:'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/30/21/19874092.jpg',
            ano:1994
        },
        {
            titulo:'O Rei Leão',
            imagem:'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/84/28/19962110.jpg',
            ano:1994
        },
        {
            titulo:'O Senhor dos Anéis - O Retorno do Rei',
            imagem:'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/92/91/47/20224867.jpg',
            ano:2003
        },
        {
            titulo:'À Espera de um Milagre',
            imagem:'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/66/66/20156966.jpg',
            ano:1999
        },
        {
            titulo:'Batman - O Cavaleiro Das Trevas',
            imagem:'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/86/98/32/19870786.jpg',
            ano:2008
        },
        {
            titulo:'A Vida é Bela',
            imagem:'https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/87/87/63/19962446.jpg',
            ano:1997
        },
        {
            titulo:'Vingadores: Ultimato',
            imagem:'https://br.web.img2.acsta.net/c_310_420/pictures/19/04/26/17/30/2428965.jpg',
            ano:2019}
    ]
    return(
        <section id="melhores-filmes" class = 'movies'>
            <h2 >Melhores Filmes</h2>
            <ul class='lista-filmes'>
            {filmes.map((filme, index)=>
            <Movie  filme={filme} key={index}/> 
            )}
            
            </ul>
                
        </section>
    )
}
export default Movies;