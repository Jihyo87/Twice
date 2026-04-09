import './album.css';

function AlbumCard( { album }){
    return(
        <section className='album'>
        <aside>
        <img className="albumimg" src={album.cover} alt="Album Covers" />
        </aside>
        <aside className='albumdetails'>
        <p> {album.title} </p>
        <p> {album.releaseDate} </p>
        <p> {album.type} </p>
        </aside>
        </section>
    )
    
}
export default AlbumCard;