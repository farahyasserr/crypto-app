import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStack, MarketStack } from "./stacks";

// Define the root stack parameter list
export type RootStackParamList = {
  AuthStack: undefined;
  MarketStack: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = ({
  isAuthenticated = true,
}: {
  isAuthenticated?: boolean;
}) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isAuthenticated ? (
        <Stack.Screen name="MarketStack" component={MarketStack} />
      ) : (
        <Stack.Screen name="AuthStack" component={AuthStack} />
      )}
    </Stack.Navigator>
  );
};
