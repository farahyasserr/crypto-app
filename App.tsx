import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";
import useAuth from "./src/hooks/useAuth";
import useLoadFonts from "./src/hooks/useLoadFonts";
import i18n from "./src/locales/i18n";
import { RootNavigator } from "./src/navigation/RootNavigator";
import { store } from "./src/store";

export default function App() {
  const fontsLoaded = useLoadFonts();
  const { isAuthenticated, isLoading } = useAuth();

  if (!fontsLoaded) {
    return null;
  }

  if (isLoading) return null; // TODO: Can be enhanced to show a splash/loading screen

  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <NavigationContainer>
          <RootNavigator isAuthenticated={isAuthenticated} />
        </NavigationContainer>
      </I18nextProvider>
    </Provider>
  );
}
