// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { login } from "../../store/mainStore/mainSlice";

// export const SignIn = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const [userName, setUserName] = useState("");
//   const [password, setPassword] = useState("");

//   const [isInvalidForm, setIsInvalidForm] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const mockUserName = "admin";
//     const mockPassword = "12345";

//     if (userName === mockUserName && password === mockPassword) {
//       setIsInvalidForm(false);
//       dispatch(login());
//       localStorage.setItem("isAuth", true);
//       navigate("/");
//     } else {
//       setIsInvalidForm(true);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>
//           <p> Username:</p>
//           <input
//             value={userName}
//             onChange={(e) => setUserName(e.target.value)}
//             name="username"
//           />
//         </label>
//         <label>
//           <p>Password:</p>
//           <input
//             onChange={(e) => setPassword(e.target.value)}
//             value={password}
//             name="password"
//             type="password"
//           />
//         </label>
//         <button>Sign in</button>
//         {isInvalidForm && <p>User data is invalid</p>}
//       </form>
//       <p>
//         Already have an account? <Link to="/login">Log in</Link>{" "}
//       </p>
//     </div>
//   );
// };

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
