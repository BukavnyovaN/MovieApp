import { Form } from "../Form/Form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/mainStore/mainSlice";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignin = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate("/");
      })
      .catch(console.error);
  };

  return <Form title="Sign Up" handleClick={handleSignin} />;
};
