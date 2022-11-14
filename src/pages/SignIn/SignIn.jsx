import { Link } from "react-router-dom";
import { SignIn } from "../../components/SignIn/SignIn";

export const SignInPage = () => {
  return (
    <div>
      <div class="text-gray-900 flex justify-end items-center p-8">
        Already have an account?
        <button class="text-yellow-500 font-bold hover:underline  px-2 py-1">
          <Link to="/login">Log In :)</Link>
        </button>
      </div>
      <SignIn />
    </div>
  );
};
