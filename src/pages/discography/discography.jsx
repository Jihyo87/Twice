import AlbumCard from "../../components/album/album.jsx"; 
import './discography.css'
import TwiceDiscography from "../../assets/data/discography.jsx";


function Discography() {
  return(
    <section className="discography">
      <aside className="discographyh2">
      <h2> Discography </h2>
      </aside>
      <section className="discographycards">
    {TwiceDiscography.map(twicealbum => (
      <AlbumCard key={twicealbum.id} album={twicealbum} className="discographyalbum">
          <h3></h3>
          <h3></h3>
          <h3>  </h3>
          </AlbumCard>
          
    ))}</section>
  </section> 
    )
}


export default Discography;