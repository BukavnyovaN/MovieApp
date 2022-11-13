import React from "react";
import { useState } from "react";
import { FILMS } from "../../constants/routes";
import { useNavigate } from "react-router-dom";

export const Pagination = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(0);
  const arr = [1, 2, 3, 4, 5];
  return (
    <div className="flex gap-1 justify-center m-10">
      <div className="inline-flex gap-1">
        {arr.map((item, index) => {
          return (
            <div
              key={item}
              onClick={() => {
                navigate(`${FILMS}/?page=${index + 1}`);
                setIsActive(1);
              }}
              className={`${
                isActive ? "bg-yellow-600" : "bg-yellow-500"
              } py-2 px-3 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-white`}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};
