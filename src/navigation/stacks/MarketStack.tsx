import { CoinDetailsScreen, MarketScreen } from "@/src/features/marketExplore";
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
      <Stack.Screen name="MarketScreen" component={MarketScreen} />
      <Stack.Screen name="CoinDetailsScreen" component={CoinDetailsScreen} />
    </Stack.Navigator>
  );
};

export type MarketStackParamList = {
  MarketScreen: undefined;
  CoinDetailsScreen: undefined;
};

export type MarketStackPropsType<T extends keyof MarketStackParamList> =
  NativeStackScreenProps<MarketStackParamList, T>;

export type MarketStackNavType<T extends keyof MarketStackParamList> =
  NativeStackNavigationProp<MarketStackParamList, T>;
