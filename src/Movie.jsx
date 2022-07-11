import React from "react";

function Movie({ value, releaseDate }) {
  console.log("### Movie");
  return (
    <div>
      <div>Movie title: {value}</div>
      <div>Release date: {releaseDate}</div>
    </div>
  );
}

// export default Movie;
export default React.memo(Movie);
