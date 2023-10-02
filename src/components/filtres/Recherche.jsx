import React from "react";

const Recherche = ({ cherche, setCherche }) => {
  return (
    <div>
      <label htmlFor="cherche">Recherche : </label>
      <input
        type="text"
        id="cherche"
        placeholder="cherche"
        value={cherche}
        onChange={(event) => setCherche(event.target.value)}
      />
    </div>
  );
};

export default Recherche;
