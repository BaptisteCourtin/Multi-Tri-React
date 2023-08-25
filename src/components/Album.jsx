import React from "react";

const Album = ({ pochette, titre, artiste, date, genre }) => {
  return (
    <div className="album">
      <img src={pochette} alt={pochette} />
      <h2>{titre.toUpperCase()}</h2>
      <h4>{artiste}</h4>
      <p>{date}</p>
      <p>{genre}</p>
    </div>
  );
};

export default Album;
