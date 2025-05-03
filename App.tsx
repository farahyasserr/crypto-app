// App.js
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SecureStore from "expo-secure-store";
import React, { useEffect, useState } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "./src/locales/i18n";
import { AuthStack, MarketStack } from "./src/navigation";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const loggedIn = await SecureStore.getItemAsync("loggedIn");
      setIsLoggedIn(loggedIn === "true");
      setIsLoading(false);
    };

    checkLoginStatus();
  }, []);

  if (isLoading) return null; // Or a splash/loading screen

  return (
    <I18nextProvider i18n={i18n}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {!isLoggedIn ? (
            <Stack.Screen name="AuthStack" component={AuthStack} />
          ) : (
            <Stack.Screen name="MarketStack" component={MarketStack} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </I18nextProvider>
  );
}
