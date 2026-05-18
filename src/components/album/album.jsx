import { Link } from 'react-router-dom';
import './album.css';

function AlbumCard( { album }){
    return(
        <Link to={`/discography/${album.slug}`} className='albumcardlink'>
        <section className='album'>
            <img className="albumimg" src={album.cover} alt="Album Covers" />
        <aside className='albumdetails'>
            <p> {album.title} </p>
            <p> {album.releaseDate} </p>
            <p> {album.type} </p>
        </aside>
        </section>
        </Link>
    )
    
}
export default AlbumCard;