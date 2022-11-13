import React from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { fetchFilms } from "../../store/filmsStore/filmsSlice";
import { fetchFilmDetailsAsync } from "../../store/filmsStore/filmsSlice";
import { FilmItem } from "../../components";
import { AppDispatchType, AppStateType } from "../../store/store";

export const FilmsSearch = () => {
  const { id } = useParams();
  const { films, isLoading, error } = useSelector(
    (store: AppStateType) => store.films
  );
  const dispatch: AppDispatchType = useDispatch();
  const [params] = useSearchParams();

  const searchValue = params.get("value");

  useEffect(() => {
    dispatch(fetchFilms({ value: searchValue }));
  }, [dispatch, searchValue]);

  useEffect(() => {
    dispatch(fetchFilmDetailsAsync({ id }));
  }, [dispatch, id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something happens :(</div>;
  }

  return (
    <div>
      <h1 className="m-8 text-2xl text-center font-bold tracking-tight leading-none text-gray-800 md:text-3xl lg:text-4xl">
        Search results "
        <span className="underline underline-offset-3 decoration-4 decoration-yellow-400 dark:decoration-yellow-400">
          {searchValue}"
        </span>
      </h1>
      <div className="min-h-screen bg-gray-100 grid grid-cols-3 gap-3 mx-20 px-10">
        {films.map((film) => (
          <FilmItem
            key={film.kinopoiskId}
            id={film.kinopoiskId}
            nameOriginal={film.nameOriginal}
            nameRu={film.nameRu}
            year={film.year}
            type={film.type}
            ratingKinopoisk={film.ratingKinopoisk}
            posterUrl={film.posterUrl}
          />
        ))}
      </div>
    </div>
  );
};
