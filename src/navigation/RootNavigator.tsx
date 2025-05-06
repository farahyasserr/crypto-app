import { createNativeStackNavigator } from "@react-navigation/native-stack";
import useAuth from "../hooks/useAuth";
import { AuthStack, MarketStack } from "./stacks";

// Define the root stack parameter list
export type RootStackParamList = {
  AuthStack: undefined;
  MarketStack: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  const { isUserAuthenticated, isLoading } = useAuth();

  if (isLoading) return null; // TODO: Can be enhanced to show a splash/loading screen

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isUserAuthenticated ? (
        <Stack.Screen name="MarketStack" component={MarketStack} />
      ) : (
        <Stack.Screen name="AuthStack" component={AuthStack} />
      )}
    </Stack.Navigator>
  );
};
