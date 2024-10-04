import { Cinema } from "../models/Cinema";

interface MovieProps {
  movie: Cinema;
}

export const Card: React.FC<MovieProps> = ({ movie }) => {
  const defaultIMG = "./img/poster.jpg";
  return (
    <div className="card">
      <img
        src={movie.backdrop_path ? movie.backdrop_path : defaultIMG}
        alt=""
      />
      <h2> {movie.title} </h2>
      <h5> {movie.release_date} </h5>
      <h4> {movie.vote_average} </h4>

      <ul>
        {movie.genre_ids?.map((genreId, index) => (
          <li key={index}> {genreId} </li>
        ))}
      </ul>
      <h3>Synopsis</h3>
      <p> {movie.overview} </p>
    </div>
  );
};
