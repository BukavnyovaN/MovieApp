import React from "react";
import { Link } from "react-router-dom";
import { FILMS } from "../../constants/routes";
import { IFilm } from "../../types/film";

export const FilmItem = ({
  id,
  nameOriginal,
  nameRu,
  year,
  type,
  ratingKinopoisk,
  posterUrl,
}: IFilm) => {
  return (
    <div className="py-3 sm:max-w-l sm:mx-auto">
      <div className="bg-white shadow-lg border-gray-100 max-h-80	 border sm:rounded-3xl p-8 flex space-x-8">
        <div className="h-full md:w-1/2 bg-white grid place-items-center">
          <img
            src={posterUrl}
            alt="poster"
            className="rounded max-h-64 object-cover"
          />
        </div>
        <div className="flex flex-col w-1/2 space-y-4">
          <div className="flex justify-between items-start">
            <h2 className="text-xl font-bold">{nameOriginal || nameRu}</h2>
            <div className="bg-yellow-400 font-bold rounded-xl p-2 ml-auto">
              {ratingKinopoisk}
            </div>
          </div>
          <div>
            <div className="text-sm text-gray-400">{type}</div>
            <div className="text-lg text-gray-800">{year}</div>
          </div>
          <p className="text-sm text-gray-400 max-h-40 overflow-y-hidden">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <Link
            to={`${FILMS}/${id}`}
            className="focus:outline-none block max-w-max text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
          >
            Show more
          </Link>
        </div>
      </div>
    </div>
  );
};
