import './album.css';

function AlbumCard( { album }){
    return(
        <section className='album'>
            <img className="albumimg" src={album.cover} alt="Album Covers" />
        <aside className='albumdetails'>
            <p> {album.title} </p>
            <p> {album.releaseDate} </p>
            <p> {album.type} </p>
        </aside>
        </section>
    )
    
}
export default AlbumCard;