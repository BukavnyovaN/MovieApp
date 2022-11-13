import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../layouts/Layout";
import { PrivateRoute } from "./PrivateRoute";
import {
  Home,
  Films,
  SignInPage,
  NotFound,
  FilmsSearch,
  LogInPage,
  FilmDetails,
  FilmGenres,
} from "../pages";
import {
  NOT_FOUND,
  SIGN_IN,
  FILMS,
  HOME,
  FILMS_SEARCH,
  LOG_IN,
  FILMS_GENRES,
} from "../constants/routes";

export const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME} element={<Layout />}>
          <Route
            index
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path={FILMS}
            element={
              <PrivateRoute>
                <Films />
              </PrivateRoute>
            }
          />
          <Route
            path={FILMS_SEARCH}
            element={
              <PrivateRoute>
                <FilmsSearch />
              </PrivateRoute>
            }
          />
          <Route
            path={`${FILMS}/:id`}
            element={
              <PrivateRoute>
                <FilmDetails />
              </PrivateRoute>
            }
          />
          <Route
            path={FILMS_GENRES}
            element={
              <PrivateRoute>
                <FilmGenres />
              </PrivateRoute>
            }
          />
        </Route>

        <Route path={SIGN_IN} element={<SignInPage />} />

        <Route path={LOG_IN} element={<LogInPage />} />

        <Route path={NOT_FOUND} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
