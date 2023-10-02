import React from "react";

const OptionByHand = ({ genreChoisi, setGenre }) => {
  return (
    <div>
      <label htmlFor="tri">Tri genre : </label>
      <select
        id="genre"
        onChange={(event) => setGenre(event.target.value)}
        value={this.state.selected}
      >
        <option value="">All</option>
        <option value="electro">Electro</option>
        <option value="pop">Pop</option>
        <option value="rock">Rock</option>
        <option value="reggeaton">Reggeaton</option>
        <option value="lofi">Lofi</option>
        <option value="rap">Rap</option>
      </select>
    </div>
  );
};

export default OptionByHand;
