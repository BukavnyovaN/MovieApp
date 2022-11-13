import React from "react";
import { NavLink } from "react-router-dom";
import { HOME, FILMS } from "../../constants/routes";
import { useDispatch } from "react-redux";
import { removeUser } from "../../store/mainStore/mainSlice";
import { useAuth } from "../../hooks/useAuth";
import { Search } from "../Search/Search";
import { HomeIcon } from "../Icons/HomeIcon";
import { FilmsIcon } from "../Icons/FilmsIcon";

export const Header = () => {
  const dispatch = useDispatch();
  const { isAuth, email } = useAuth();

  return (
    <header className="bg-gray-800">
      <div className="navbar shadow-md py-2 bg-gray-800 relative flex items-center w-100 justify-between">
        <ul
          className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0"
          id="tabs-tab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <NavLink
              className="
          flex justify-center
          items-center gap-2
          nav-link
          block
          font-medium
          text-s
          leading-tight
          uppercase
          border-x-0 border-t-0 border-b-2 border-transparent
          px-6
          py-3
          m-2
          hover:border-yellow-500
          focus:border-yellow-500
          active
        "
              id="tabs-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#tabs-home"
              role="tab"
              aria-controls="tabs-home"
              aria-selected="true"
              style={({ isActive }) => ({
                color: isActive ? "#eab308" : "white",
              })}
              to={HOME}
            >
              <HomeIcon />
              Home{" "}
            </NavLink>
          </li>
          <li className="nav-item" role="presentation">
            <NavLink
              className="
              flex justify-center
              items-center gap-2
            nav-link
            block
            font-medium
            text-s
            leading-tight
            uppercase
            border-x-0 border-t-0 border-b-2 border-transparent
            px-6
            py-3
            m-2
            hover:border-yellow-500
          focus:border-yellow-500
          "
              id="tabs-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#tabs-profile"
              role="tab"
              aria-controls="tabs-profile"
              aria-selected="false"
              style={({ isActive }) => ({
                color: isActive ? "#eab308" : "white",
              })}
              to={FILMS}
            >
              <FilmsIcon />
              Films{" "}
            </NavLink>
          </li>
        </ul>
        <Search />
        <div className="flex items-center w-100 justify-between">
          <div className="text-yellow-500">{email}</div>
          <button
            className="text-white mx-5 bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
            onClick={() => dispatch(removeUser())}
          >
            Log out
          </button>
        </div>
      </div>
    </header>
  );
};
