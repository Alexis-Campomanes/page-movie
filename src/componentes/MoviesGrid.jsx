import { MovieCard } from "./MovieCard";
import movies from "../movies.json";
import styles from "../module.css/MoviesGrid.module.css";


export function MoviesGrid(){
    return (       
        <ul className= {styles.moviesGrid}>
          {movies.map((movies) => (
                <MovieCard key={movies.id} movies={movies} />
            ))}
        </ul>
      
    );
}