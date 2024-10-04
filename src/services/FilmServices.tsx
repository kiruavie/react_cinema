import axios from "axios";

export class FilmServices {
  private static URL: string =
    "https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=code&language=fr-FR";

  public static getAllMovies = () => {
    const FilmUrl: string = `${this.URL}`;
    return axios.get(FilmUrl);
  };
}
