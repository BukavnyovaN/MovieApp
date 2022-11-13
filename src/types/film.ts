export interface IFilm {
  id?: number;
  nameOriginal?: string;
  nameRu?: string;
  year?: number;
  type?: string;
  ratingKinopoisk?: number;
  kinopoiskId?: number;
  posterUrl?: string;
  description?: string;
  filmLength?: number | string;
}
