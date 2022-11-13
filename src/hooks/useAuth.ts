import { useSelector } from "react-redux";
import { IUserInitialState } from "../types/user";

export function useAuth() {
  const email = useSelector((state: IUserInitialState) => state.user.email);
  const token = useSelector((state: IUserInitialState) => state.user.token);
  const id = useSelector((state: IUserInitialState) => state.user.id);

  return {
    isAuth: !!email,
    email,
    token,
    id,
  };
}
