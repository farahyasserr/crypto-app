import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { I18nextProvider } from "react-i18next";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import useLoadFonts from "./src/hooks/useLoadFonts";
import i18n from "./src/locales/i18n";
import { RootNavigator } from "./src/navigation/RootNavigator";
import { store } from "./src/store/store";

export default function App() {
  const fontsLoaded = useLoadFonts();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <NavigationContainer>
          <StatusBar animated barStyle="light-content" />
          <RootNavigator />
        </NavigationContainer>
      </I18nextProvider>
    </Provider>
  );
}
