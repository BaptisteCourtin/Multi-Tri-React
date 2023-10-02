import React, { useState } from "react";
import TableauAlbums from "@assets/TableauAlbums";

import TrueFalse from "@components/filtres/TrueFalse";
import OptionByHand from "@components/filtres/optionByHand";
import OptionAutoUnique from "@components/filtres/optionAutoUnique";
import MyChoix from "@components/filtres/MyChoix";

import OptionsTri from "@components/tri/OptionsTri";
import Recherche from "@components/filtres/Recherche";

import Album from "@components/Album";

function Home() {
  const [artiste, setArtiste] = useState(false); // TrueFalse
  const [genreChoisi, setGenre] = useState(""); // OptionByHand
  const [artistChoisi, setArtist] = useState(""); // OptionAutoUnique
  const [myAnnee, setMyAnnee] = useState(""); // MyChoix
  const [cherche, setCherche] = useState(""); // recherche

  const [tri, setTri] = useState("Date Croissant"); //OptionsTri

  // ---

  const toCompareMyWish = (each) => {
    let thisDate = each.split("/");

    let thisDate0 = parseInt(thisDate[0]);
    let thisDate1 = parseInt(thisDate[1]);
    let MyTrueAnnee = parseInt(myAnnee);

    if (
      myAnnee === "" ||
      thisDate1 === MyTrueAnnee ||
      (thisDate1 === MyTrueAnnee - 1 && thisDate0 >= 10) ||
      (thisDate1 === MyTrueAnnee + 1 && thisDate0 <= 3)
    ) {
      return true;
    }
  };

  // ---

  const resetFiltres = () => {
    setArtiste(false);
    setGenre("");
    setArtist("");
    setMyAnnee("");
    setCherche("");
    setTri("Date Croissant");

    //   function reset() {
    //     $("#mySelect option").prop("selected", function () {
    //         // return defaultSelected property of the option
    //         return this.defaultSelected;
    //     });
    //  }
  };

  return (
    <div className="home">
      <h1>Templates de tri</h1>

      <section className="filtres">
        <TrueFalse artiste={artiste} setArtiste={setArtiste} />
        <OptionByHand genreChoisi={genreChoisi} setGenre={setGenre} />
        <OptionAutoUnique TableauAlbums={TableauAlbums} setArtist={setArtist} />
        <MyChoix myAnnee={myAnnee} setMyAnnee={setMyAnnee} />
        <Recherche cherche={cherche} setCherche={setCherche} />
      </section>

      <section className="tri">
        <OptionsTri setTri={setTri} />
      </section>

      <button onClick={() => resetFiltres()}>Reset Filtres</button>

      <section className="all-albums">
        {TableauAlbums
          // filtres
          .filter((each) => !artiste || each.artiste.includes("Alan Walker"))
          .filter((each) => each.genre.includes(genreChoisi))
          .filter((each) => each.artiste.includes(artistChoisi))
          .filter((each) => toCompareMyWish(each.date))
          // recherche tapée
          .filter(
            (each) =>
              each.titre.toLowerCase().includes(cherche.toLowerCase()) ||
              each.artiste.toLowerCase().includes(cherche.toLowerCase())
          )
          // sort
          .sort(function compare(a, b) {
            if (tri === "Date Croissant") {
              const aTab = a.date.split("/");
              const bTab = b.date.split("/");

              if (aTab[1] < bTab[1]) return -1;
              else if (aTab[1] > bTab[1]) return 1;
              else if (aTab[1] === bTab[1]) {
                if (aTab[0] < bTab[0]) return -1;
                else if (aTab[0] > bTab[0]) return 1;
              }
              return 0;
            } else if (tri === "Date Décroissant") {
              const aTab = a.date.split("/");
              const bTab = b.date.split("/");

              if (aTab[1] < bTab[1]) return 1;
              else if (aTab[1] > bTab[1]) return -1;
              else if (aTab[1] === bTab[1]) {
                if (aTab[0] < bTab[0]) return 1;
                else if (aTab[0] > bTab[0]) return -1;
              }
              return 0;
            } else if (tri === "Artiste A-Z") {
              if (a.artiste < b.artiste) return -1;
              else if (a.artiste > b.artiste) return 1;
              return 0;
            } else if (tri === "Artiste Z-A") {
              if (a.artiste < b.artiste) return 1;
              else if (a.artiste > b.artiste) return -1;
              return 0;
            } else if (tri === "Album A-Z") {
              if (a.titre < b.titre) return -1;
              else if (a.titre > b.titre) return 1;
              return 0;
            } else if (tri === "Album Z-A") {
              if (a.titre < b.titre) return 1;
              else if (a.titre > b.titre) return -1;
              return 0;
            }
            return 0;
          })

          //map
          .map((eachAlbum, index) => (
            <Album {...eachAlbum} key={index}></Album>
          ))}
      </section>
    </div>
  );
}

export default Home;
