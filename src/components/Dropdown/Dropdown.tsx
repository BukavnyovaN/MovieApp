import React from "react";
import { useState } from "react";
import { DropdownArrow } from "../Icons/DropdownArrow";
import { IDropdown } from "../../types/dropdown";

export const Dropdown = ({
  title,
  items,
  dropdownValue,
  setDropdownValue,
}: IDropdown) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="m-5">
      <button
        id="dropdownDefault"
        data-dropdown-toggle="dropdown"
        className="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <DropdownArrow />
      </button>

      <div
        id="dropdown"
        className={`${!isOpen && "hidden"} relative z-10 w-44`}
      >
        <ul
          className="absolute top-2 left-0 rounded shadow bg-gray-700 py-1 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefault"
        >
          {items.map(({ id, name, value }) => (
            <li
              onClick={() => {
                setDropdownValue(value);
                setIsOpen(!isOpen);
              }}
              key={id}
            >
              <span
                className={`${
                  value === dropdownValue ? "text-yellow-500" : "text-white"
                } block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white`}
              >
                {name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
