import { Button } from "@/src/components";
import { AuthStackNavType } from "@/src/navigation";
import { AuthRoutes } from "@/src/navigation/routeTypes";
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
    <View style={styles.mainContainer}>
      <Text>{t("auth.USE_BIOMETRIC_TO_LOGIN")}</Text>
      <Button title={t("auth.SET_UP")} onPress={onPressSetup} />
    </View>
  );
}
