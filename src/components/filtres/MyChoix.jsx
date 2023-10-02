import React from "react";

const MyChoix = ({ myAnnee, setMyAnnee }) => {
  return (
    <div>
      <label htmlFor="MyAnnee">Année voulu (+-3 mois) : </label>
      <input
        type="number"
        min="2000"
        max="2030"
        step={1}
        id="MyAnnee"
        placeholder="MyAnnee"
        value={myAnnee}
        onChange={(event) => setMyAnnee(event.target.value)}
      />
    </div>
  );
};

export default MyChoix;
