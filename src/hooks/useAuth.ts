import * as SecureStore from "expo-secure-store";
import { useEffect, useState } from "react";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const loggedIn = await SecureStore.getItemAsync("loggedIn");
      setIsAuthenticated(loggedIn === "true");
      setIsLoading(false);
    };

    checkLoginStatus();
  }, []);

  return { isAuthenticated, isLoading };
};

export default useAuth;
