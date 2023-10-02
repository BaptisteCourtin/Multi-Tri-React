import React from "react";

const TrueFalse = ({ artiste, setArtiste }) => {
  return (
    <div>
      <button onClick={() => setArtiste(!artiste)}>
        Alan Walker Only {artiste ? "🟢" : "🔴"}
      </button>
    </div>
  );
};

export default TrueFalse;
