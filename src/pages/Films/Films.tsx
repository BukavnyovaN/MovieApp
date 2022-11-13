import React from "react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchFilms } from "../../store/filmsStore/filmsSlice";
import { FilmItem, Dropdown, Pagination } from "../../components";
import { AppStateType, AppDispatchType } from "../../store/store";

const sortItems = [
  { id: 1, name: "Audience choice", value: "NUM_VOTE" },
  { id: 2, name: "Rating", value: "RATING" },
  { id: 3, name: "Year", value: "YEAR" },
];

export const Films = () => {
  const { films, isLoading, error } = useSelector(
    (store: AppStateType) => store.films
  );
  const dispatch: AppDispatchType = useDispatch();

  const [dropdownValue, setDropdownValue] = useState(sortItems[0].value);
  const [params] = useSearchParams();
  const page = params.get("page");

  useEffect(() => {
    dispatch(fetchFilms({ order: dropdownValue, page }));
  }, [dispatch, dropdownValue, page]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something happens :(</div>;
  }

  return (
    <div>
      <div>
        <Dropdown
          title="Sort by "
          items={sortItems}
          dropdownValue={dropdownValue}
          setDropdownValue={setDropdownValue}
        />
      </div>
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
      <Pagination />
    </div>
  );
};
