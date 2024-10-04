import { useEffect, useState } from "react";
import { Cinema } from "../models/Cinema";
import { FilmServices } from "../services/FilmServices";
import { AxiosResponse } from "axios";
import { Card } from "./Card";

interface ApiResponse {
  results: Cinema[];
}
export const Film: React.FC = () => {
  const [film, setFilm] = useState<Cinema[]>([]);

  useEffect(() => {
    FilmServices.getAllMovies()
      .then((res: AxiosResponse<ApiResponse>) => {
        const movies = res.data.results;
        setFilm(movies);
      })
      .catch((error) => {
        console.error("Erreur lors du chargement des films", error);
      });
  }, []);

  return (
    <div className="home-page">
      {film.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
