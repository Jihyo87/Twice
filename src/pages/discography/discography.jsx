import AlbumCard from "../../components/album/album.jsx"; 
import "./discography.css";
import TwiceDiscography from "../../assets/data/albumdata.jsx";
import { useState } from "react";

function Discography() {
  const [filter, setFilter] = useState("All");

  const filteredAlbums = TwiceDiscography.filter((album) => {
    if (filter === "All") return true;
    return album.category === filter;
  });

  return (
    <section className="discography">

      <aside className="discographyh2">
        <h2>Discography</h2>
      </aside>
      
      <aside className="searchfilter">
        <button onClick={() => setFilter("All")}>All</button>
        <button onClick={() => setFilter("Japanese")}>Japanese</button>
        <button onClick={() => setFilter("Korean")}>Korean</button>
        <button onClick={() => setFilter("Subunit")}>Subunit</button>
        <button onClick={() => setFilter("Solo")}>Solo</button>
      </aside>

      <section className="discographycards">
        {filteredAlbums.map((album) => (
          <AlbumCard
            key={album.id}
            album={album}
            className="discographyalbum"
          />
        ))}
      </section>
    </section>
  );
}
export default Discography;