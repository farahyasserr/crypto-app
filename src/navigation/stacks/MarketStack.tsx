import { CoinDetailsScreen, MarketScreen } from "@/src/features/marketExplore";
import { Coin } from "@/src/models/Coin";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import React from "react";
import { MarketRoutes } from "../routeTypes";

const Stack = createNativeStackNavigator<MarketStackParamList>();

export const MarketStack = () => {
  const screenOptions = {
    headerShown: false,
  };

  return (
    <Stack.Navigator
      screenOptions={screenOptions}
      initialRouteName={MarketRoutes.MarketScreen}
    >
      <Stack.Screen name={MarketRoutes.MarketScreen} component={MarketScreen} />
      <Stack.Screen
        name={MarketRoutes.CoinDetailsScreen}
        component={CoinDetailsScreen as React.ComponentType<any>}
      />
    </Stack.Navigator>
  );
};

export type MarketStackParamList = {
  MarketScreen: undefined;
  CoinDetailsScreen: { product: Coin };
};

export type MarketStackPropsType<T extends keyof MarketStackParamList> =
  NativeStackScreenProps<MarketStackParamList, T>;

export type MarketStackNavType<T extends keyof MarketStackParamList> =
  NativeStackNavigationProp<MarketStackParamList, T>;
