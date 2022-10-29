import Link from "next/link";
import React,{FC} from "react";
import { IMovie } from "../MovieList";
interface TProps{
    movie: IMovie
}

const Movie: FC<TProps> = ({movie}) => {
    return (
        <li>
            <Link href={`/movies/${movie.id}`}>
            <img className="" src={movie.Poster} alt={`${movie.Title}Poster`}></img>
            </Link>
                
                <strong className="text-md">{movie.Title}</strong>
        </li>
    )

}


export default Movie