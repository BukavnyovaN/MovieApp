import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { Carousel } from "../../components";

export const Home = () => {
  const { isAuth, email } = useAuth();

  return isAuth ? (
    <div>
      <Carousel />
    </div>
  ) : (
    <Navigate to="/login" />
  );
};
