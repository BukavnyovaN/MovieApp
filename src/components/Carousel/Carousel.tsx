import React from "react";
import { useState } from "react";
import { FILMS_GENRES } from "../../constants/routes";
import { useNavigate } from "react-router-dom";

export const Carousel = () => {
  const navigate = useNavigate();
  const [genreValue, setGenreValue] = useState(0);

  const genres = [
    {
      genreId: 1,
      name: "THRILLER",
      url: "https://picsum.photos/seed/1/2000/1000",
    },
    {
      genreId: 2,
      name: "DRAMA",
      url: "https://picsum.photos/seed/3/2000/1000",
    },
    {
      genreId: 3,
      name: "CRIMINAL",
      url: "https://picsum.photos/seed/24/2000/1000",
    },
    {
      genreId: 4,
      name: "MELODRAMA",
      url: "https://picsum.photos/seed/5/2000/1000",
    },
    {
      genreId: 5,
      name: "DETECTIVE",
      url: "https://picsum.photos/seed/6/2000/1000",
    },
    {
      genreId: 7,
      name: "ADVENTURE",
      url: "https://picsum.photos/seed/7/2000/1000",
    },
    {
      genreId: 8,
      name: "BIOGRAPHY",
      url: "https://picsum.photos/seed/8/2000/1000",
    },
    { genreId: 9, name: "NOIR", url: "https://picsum.photos/seed/9/2000/1000" },
    {
      genreId: 11,
      name: "ACTION",
      url: "https://picsum.photos/seed/10/2000/1000",
    },
    {
      genreId: 12,
      name: "FANTASY",
      url: "https://picsum.photos/seed/11/2000/1000",
    },
    {
      genreId: 13,
      name: "COMEDY",
      url: "https://picsum.photos/seed/12/2000/1000",
    },
    {
      genreId: 17,
      name: "HORROR",
      url: "https://picsum.photos/seed/13/2000/1000",
    },
    {
      genreId: 18,
      name: "CARTOON",
      url: "https://picsum.photos/seed/14/2000/1000",
    },
    {
      genreId: 22,
      name: "DOCUMENTARY",
      url: "https://picsum.photos/seed/15/2000/1000",
    },
    {
      genreId: 24,
      name: "ANIME",
      url: "https://picsum.photos/seed/27/2000/1000",
    },
  ];

  return (
    <div className=" flex items-center justify-center ">
      <div className="grid grid-cols-6 gap-x-4 gap-y-1 max-w-6xl">
        <div className="col-span-full mb-3">
          <h2 className="m-8 text-2xl text-center font-bold tracking-tight leading-none text-gray-800 md:text-3xl lg:text-4xl">
            What whould_
            <span className="underline underline-offset-3 decoration-4 decoration-yellow-400 dark:decoration-yellow-400">
              you_
            </span>
            prefer?
          </h2>
        </div>

        {genres.map(({ genreId, name, url }) => (
          <div
            key={genreId}
            className="relative col-span-2 text-white hover:text-yellow-400"
            onClick={() => {
              setGenreValue(genreId);
              navigate(`${FILMS_GENRES}/?genre=${genreId}`);
            }}
          >
            <img
              src={url}
              className="rounded-xl brightness-75 hover:opacity-40"
              alt="ph"
            />
            <div className="text-xl text-center -translate-y-8 text-inherit font-bold">
              {" "}
              {name}{" "}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
