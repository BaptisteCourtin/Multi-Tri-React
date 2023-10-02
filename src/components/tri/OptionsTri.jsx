import React, { useState } from "react";

const OptionsTri = ({ setTri }) => {
  return (
    <div>
      <label htmlFor="tri">Ordre de tri : </label>
      <select id="tri" onChange={(event) => setTri(event.target.value)}>
        <option value="Date Croissant">Date Croissant</option>
        <option value="Date Décroissant">Date Décroissant</option>
        <option value="Artiste A-Z">Artiste A-Z</option>
        <option value="Artiste Z-A">Artiste Z-A</option>
        <option value="Album A-Z">Album A-Z</option>
        <option value="Album Z-A">Album Z-A</option>
      </select>
    </div>
  );
};

export default OptionsTri;
