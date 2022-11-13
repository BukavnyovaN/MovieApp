import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchFilmDetailsAsync } from "../../store/filmsStore/filmsSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FILMS } from "../../constants/routes";
import { AppDispatchType, AppStateType } from "../../store/store";
import { IFilmDetails } from "../../types/filmDetail";

export const FilmDetails = () => {
  const { id } = useParams();
  const dispatch: AppDispatchType = useDispatch();
  const filmDetails: IFilmDetails = useSelector(
    (store: AppStateType) => store.films.filmDetails
  );

  console.log(filmDetails);

  useEffect(() => {
    dispatch(fetchFilmDetailsAsync({ id }));
  }, [dispatch, id]);

  return (
    <div className="min-w-screen min-h-screen bg-yellow-500 flex items-start p-10 lg:p-12 overflow-hidden relative">
      <div className="w-full max-w-6xl rounded-xl bg-white shadow-xl p-5 lg:p-10 mx-auto text-gray-800 relative md:text-left">
        <div className="md:flex items-start -mx-10">
          <div className="max-w-sm px-10 mb-10 md:mb-0">
            <div className="relative">
              <img
                src={filmDetails.posterUrl}
                className="w-full rounded-xl relative z-10"
                alt=""
              ></img>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-10">
            <div className="mb-10">
              <div className="flex items-start mb-3">
                <h1 className="font-bold uppercase text-2xl mb-5">
                  {filmDetails.nameOriginal || filmDetails.nameRu}
                </h1>
                <div className="bg-yellow-500 font-bold rounded-xl p-2 ml-auto">
                  {filmDetails.ratingKinopoisk}
                </div>
              </div>
              <p className="text-xl">
                {filmDetails.description ||
                  "Lorem ipsum dolor sit, amet consectetur adipisicing, elit. Eos, voluptatum dolorum! Laborum blanditiis consequatur, voluptates, sint enim fugiat saepe, dolor fugit, magnam explicabo eaque quas id quo porro dolorum facilis..."}
              </p>
            </div>
            <div className="flex-col">
              <div className="text-l align-bottom mb-5">
                YEAR: <span className="font-medium">{filmDetails.year}</span>
              </div>
              <div className="text-l align-bottom mb-5">
                DURATION:{" "}
                <span className="font-medium">
                  {filmDetails.filmLength} min.
                </span>
              </div>
              <div className="align-bottom">
                <Link
                  to={`${FILMS}`}
                  className="focus:outline-none block max-w-max bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:focus:ring-yellow-900"
                >
                  BACK
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
