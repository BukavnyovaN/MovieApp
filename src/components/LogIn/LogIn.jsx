import React from "react";
import { Form } from "../Form/Form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../store/mainStore/mainSlice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LogIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password).then(({ user }) => {
      console.log(user);
      dispatch(
        setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken,
        })
      );
      navigate("/");
    });
  };

  return <Form title="Log In" handleClick={handleLogin} />;
};

export { LogIn };
