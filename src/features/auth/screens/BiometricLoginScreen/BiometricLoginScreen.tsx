import { images } from "@/assets/images";
import { Button, ScreenWrapper } from "@/src/components";
import { AuthRoutes } from "@/src/navigation/routeTypes";
import { AuthStackNavType } from "@/src/navigation/stacks";
import { Image } from "expo-image";
import { useTranslation } from "react-i18next";
import { Text, View } from "react-native";
import { styles } from "./BiometricLoginScreen.styles";

interface BiometricLoginScreenProps {
  navigation: AuthStackNavType<AuthRoutes.BiometricLoginScreen>;
}

export default function BiometricLoginScreen({
  navigation,
}: BiometricLoginScreenProps) {
  const { t } = useTranslation();

  const onPressSetup = () => {
    // TODO: Implement setup
  };

  return (
    <ScreenWrapper paddingBottom>
      <View style={styles.container}>
        <Text style={styles.title}>{t("auth.USE_BIOMETRIC_TO_LOGIN")}</Text>
        <View>
          <Image source={images.biometryImage} style={styles.biometryImage} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title={t("auth.SET_UP")} onPress={onPressSetup} />
        </View>
      </View>
    </ScreenWrapper>
  );
}
