import React, { useEffect, useState } from "react";

export interface IMovie{
  "Title": string,
  "US Gross": number | null,
  "Worldwide Gross": number | null,
  "US DVD Sales": number | null,
  "Production Budget": number | null,
  "Release Date": string,
  "MPAA Rating": string,
  "Running Time min": number | null,
  "Distributor": string,
  "Source": number | null,
  "Major Genre": string | null,
  "Creative Type": string | null,
  "Director": string | null,
  "Rotten Tomatoes Rating": number | null,
  "IMDB Rating": number | null,
  "IMDB Votes": number,
  "id": number,
  "Poster": string
}

export const MovieList = () => {
    const [movies, setMovies] = useState<IMovie[]>([]);
    useEffect(() => {
        fetch('http://localhost:3000/movies')
        .then(res => res.json())
        .then((data:IMovie[]) => setMovies(data))
        .catch((error) => console.error(error))
    }, []);
return(

    <div>MovieList</div>
)
}

