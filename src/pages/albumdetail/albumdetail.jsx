import './albumdetail.css';
import TwiceDiscography from '../../assets/data/albumdata';
import { useParams } from 'react-router-dom';

function AlbumDetail(){
    const { slug } = useParams();

    const album = TwiceDiscography.find((a) => a.slug === slug)

    const urlObj = new URL(album.ytlink)

    const videoID = urlObj.searchParams.get("v") || urlObj.pathname.split("/").pop();

    const ytthumbnail = `https://img.youtube.com/vi/${videoID}/maxresdefault.jpg`;
    
    if (!album){
        return <h3> Not Found! </h3>
    }
    
    return(
        <section className='albumdetailslayout'>
            <section className="albumdetailh2">
                <h2 className='detailtrackh2'> {album.title} </h2>
            </section>
            <aside className='detailtrack'>
                <h3 > Title Track   : {album.titleTrack} </h3>
            </aside> 
            <aside className='detaildesc'>
                <p>{album.description}</p>
            </aside>
            <aside className='detailvideo'>
                <iframe
                    className='iframe'
                    src={`https://www.youtube.com/embed/${videoID}`}
                    title={`${album.title} Music Video `}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    frameBorder="0"
                    allowFullScreen
                >
                </iframe>
            </aside>
        </section>        
    )
}

export default AlbumDetail;