import BiometricLoginScreen from "@/src/features/auth/screens";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import React from "react";
import { AuthRoutes } from "../routeTypes";

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthStack = () => {
  const screenOptions = {
    headerShown: false,
  };

  return (
    <Stack.Navigator
      screenOptions={screenOptions}
      initialRouteName={AuthRoutes.BiometricLoginScreen}
    >
      <Stack.Screen
        name="BiometricLoginScreen"
        component={BiometricLoginScreen}
      />
    </Stack.Navigator>
  );
};

export type AuthStackParamList = {
  BiometricLoginScreen: undefined;
};

export type AuthStackPropsType<T extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, T>;

export type AuthStackNavType<T extends keyof AuthStackParamList> =
  NativeStackNavigationProp<AuthStackParamList, T>;
