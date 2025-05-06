import * as SecureStore from "expo-secure-store";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/selectors";
import { selectIsUserAuthenticated } from "../store/selectors/authSelector";
import { setAuthState } from "../store/slices/authSlice";
import { RootState } from "../store/store";

const useAuth = () => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const isUserAuthenticated = useAppSelector((state: RootState) =>
    selectIsUserAuthenticated(state)
  );

  useEffect(() => {
    const checkLoginStatus = async () => {
      const loggedIn = await SecureStore.getItemAsync("isAuthenticated");
      dispatch(setAuthState(loggedIn === "true"));
      setIsLoading(false);
    };

    checkLoginStatus();
  }, [dispatch]);

  return { isUserAuthenticated, isLoading };
};

export default useAuth;
