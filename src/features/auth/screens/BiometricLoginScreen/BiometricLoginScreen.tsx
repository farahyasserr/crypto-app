import { images } from "@/assets/images";
import { Button, ScreenWrapper } from "@/src/components";
import { RootStackParamList } from "@/src/navigation/RootNavigator";
import { RootRoutes } from "@/src/navigation/routeTypes";
import { useAppDispatch } from "@/src/store/selectors";
import { setAuthState } from "@/src/store/slices/authSlice";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Image } from "expo-image";
import * as LocalAuthentication from "expo-local-authentication";
import * as SecureStore from "expo-secure-store";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Alert, Text, View } from "react-native";
import { styles } from "./BiometricLoginScreen.styles";

type BiometricLoginScreenProps = NativeStackScreenProps<
  RootStackParamList,
  RootRoutes.AuthStack
>;

export default function BiometricLoginScreen({
  navigation,
}: BiometricLoginScreenProps) {
  const { t } = useTranslation();
  const [isBiometricAvailable, setIsBiometricAvailable] = useState(false);
  const [isBiometricEnabled, setIsBiometricEnabled] = useState(false);

  // Check if biometric authentication is available on the device
  useEffect(() => {
    checkBiometricAvailability();
  }, []);

  const dispatch = useAppDispatch();

  const checkBiometricAvailability = async () => {
    try {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      const enrolled = await LocalAuthentication.isEnrolledAsync();
      setIsBiometricAvailable(compatible && enrolled);
    } catch (error) {
      console.error("Error checking biometric availability:", error);
      setIsBiometricAvailable(false);
    }
  };

  const onPressSetup = async () => {
    try {
      // Get the available authentication types
      const types =
        await LocalAuthentication.supportedAuthenticationTypesAsync();
      const hasFaceID = types.includes(
        LocalAuthentication.AuthenticationType.FACIAL_RECOGNITION
      );

      // Customize the prompt message based on available authentication type
      const promptMessage = hasFaceID
        ? t("auth.FACEID_SETUP_PROMPT")
        : t("auth.FINGERPRINT_SETUP_PROMPT");

      const biometricAuth = await LocalAuthentication.authenticateAsync({
        promptMessage,
        fallbackLabel: t("auth.BIOMETRIC_FALLBACK"),
        cancelLabel: t("auth.BIOMETRIC_CANCEL"),
        disableDeviceFallback: false,
      });

      if (biometricAuth.success) {
        // Store dummy credentials for demo purposes
        await SecureStore.setItemAsync("biometricEnabled", "true");

        // Store dummy user credentials in secure storage
        await SecureStore.setItemAsync("userEmail", "demo@example.com");
        await SecureStore.setItemAsync("userPassword", "dummyPassword123");

        setIsBiometricEnabled(true);

        Alert.alert(
          t("auth.BIOMETRIC_SETUP_SUCCESS_TITLE"),
          t("auth.BIOMETRIC_SETUP_SUCCESS_MESSAGE"),
          [
            {
              text: t("common.OK"),
              onPress: async () => {
                await SecureStore.setItemAsync("isAuthenticated", "true");
                dispatch(setAuthState(true));
              },
            },
          ]
        );
      } else if (biometricAuth.error) {
        console.log("Biometric authentication error:", biometricAuth.error);
        Alert.alert(
          t("auth.BIOMETRIC_SETUP_FAILED_TITLE"),
          t("auth.BIOMETRIC_SETUP_FAILED_MESSAGE")
        );
      }
    } catch (error) {
      console.error("Biometric setup error:", error);
      Alert.alert(
        t("auth.BIOMETRIC_SETUP_ERROR_TITLE"),
        t("auth.BIOMETRIC_SETUP_ERROR_MESSAGE")
      );
    }
  };

  return (
    <ScreenWrapper paddingBottom>
      <View style={styles.container}>
        <Text style={styles.title}>{t("auth.USE_BIOMETRIC_TO_LOGIN")}</Text>
        <View>
          <Image source={images.biometryImage} style={styles.biometryImage} />
        </View>
        {isBiometricAvailable ? (
          <View style={styles.buttonContainer}>
            <Button title={t("auth.SET_UP")} onPress={onPressSetup} />
          </View>
        ) : (
          <Text style={styles.noBiometricAvailableText}>
            {t("auth.BIOMETRIC_NOT_AVAILABLE_MESSAGE")}
          </Text>
        )}
      </View>
    </ScreenWrapper>
  );
}
