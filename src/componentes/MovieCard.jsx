import styles from "../module.css/MoviesCard.module.css"

export function MovieCard({ movies }){
    const imageUrl = "https://image.tmdb.org/t/p/w300" + movies.poster_path;
    return(
        
        <li className={styles.moviesCard}>
            <img
             width={230}
             height={345}
             className= {styles.moviesImage}src={imageUrl} alt= {movies.title} />
            <div>{movies.title}</div>
        </li>
    );
}