import React from "react";
import TableauAlbums from "@assets/TableauAlbums";

import Album from "@components/Album";

function Home() {
  console.log(TableauAlbums[0]);

  return (
    <div className="home">
      <h1>Templates de tri</h1>

      <section className="all-albums">
        {TableauAlbums.map((eachAlbum, index) => (
          <Album {...eachAlbum} key={index}></Album>
        ))}
      </section>
      <p>ty</p>
    </div>
  );
}

export default Home;
