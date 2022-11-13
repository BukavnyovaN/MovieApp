import { Link } from "react-router-dom";
import { LogIn } from "../../components/LogIn/LogIn";

export const LogInPage = () => {
  return (
    <div>
      <div class="text-gray-900 flex justify-end items-center p-8">
        Don't have an account?
        <button class="text-yellow-500 font-bold hover:underline  px-2 py-1">
          <Link to="/signin">Sign up :)</Link>
        </button>
      </div>
      <LogIn />
    </div>
  );
};
