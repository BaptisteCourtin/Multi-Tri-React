import React from "react";

const OptionAutoUnique = ({ TableauAlbums, setArtist }) => {
  const getUnique = (array, myVar) => {
    // arr = tableau // myVar = artiste / genre
    // !!! tableau d'objets

    let unique = [];

    // split
    for (let i = 0; i < array.length; i++) {
      if (array[i][myVar].includes("&")) {
        let one = array[i][myVar].split(" & ");
        for (let j = 0; j < one.length; j++) {
          unique.push(one[j]);
        }
      } else {
        unique.push(array[i][myVar]);
      }
    }

    unique = unique
      // pas compris cette partie =>
      .map((each, i, X) => X.indexOf(each) === i && i)
      // eleminate the dead key & store unique objects
      .filter((each) => unique[each])
      .map((each) => unique[each])
      // <= pas compris cette partie

      .sort(function compare(a, b) {
        if (a < b) return -1;
        else if (a > b) return 1;
        return 0;
      });

    return unique;
    // retoune un tableau avec les artistes suivant myVar
    // par ordre alphabetique
  };

  return (
    <div>
      <label htmlFor="tri">Tri artiste : </label>
      <select id="artist" onChange={(event) => setArtist(event.target.value)}>
        <option value="">All</option>
        {getUnique(TableauAlbums, "artiste").map((tab, index) => (
          // on retourne un tableau
          <option value={tab} key={index}>
            {tab}
          </option>
        ))}
      </select>
    </div>
  );
};

export default OptionAutoUnique;
