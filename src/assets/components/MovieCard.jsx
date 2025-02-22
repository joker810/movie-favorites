import "../../css/MovieCard.css";
import { useMovieContext } from "../../context/MovieContext";

function MovieCard({ movie }) {
	const {isFavorites,addToFavorites,removeFromFavorites}=useMovieContext();

	const favorite=isFavorites(movie.id);

	const handleFavoriteClick = (e) => {
	  e.preventDefault();
	  if(favorite) removeFromFavorites(movie.id);
	  else addToFavorites(movie);
	};
  
	return (
	  <div className="movie-card">
		<div className="movie-poster">
		  <img 
			src={`https://image.tmdb.org/t/p/w500${movie.poster_path}` || "placeholder-image-url"} 
			alt={movie.title || "Movie poster"} 
			loading="lazy"
		  />
		  <div className="movie-overlay">
			<button
			  className={`favorite-btn ${favorite ? "active": ""}`}
			  onClick={handleFavoriteClick}
			  aria-label="Add to favorites"
			  type="button"
			>
			  {favorite ? "❤️" : "🤍"}
			</button>
		  </div>
		</div>
		<div className="movie-info">
		  <h3>{movie.title || "Untitled"}</h3>
		  <p>{movie.release_date || "Release date unavailable"}</p>
		</div>
	  </div>
	);
  }
  
  export default MovieCard;