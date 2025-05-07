import { ScreenWrapper } from "@/src/components";
import { MarketRoutes } from "@/src/navigation/routeTypes";
import { MarketStackNavType } from "@/src/navigation/stacks";
import { useGetAllCoinsQuery } from "@/src/services/coinApi/coinApi";
import { useAppDispatch } from "@/src/store/selectors";
import { setAuthState } from "@/src/store/slices/authSlice";
import { colors } from "@/src/ui/colors";
import { Ionicons } from "@expo/vector-icons";
import * as SecureStore from "expo-secure-store";
import { t } from "i18next";
import React, { useMemo, useState } from "react";
import {
  Keyboard,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { styles } from "./MarketScreen.styles";
import { MarketTabsSection } from "./blocks";
import AllCoinsSection from "./blocks/AllCoinsSection/AllCoinsSection";

export default function MarketScreen({
  navigation,
}: {
  navigation: MarketStackNavType<MarketRoutes.MarketScreen>;
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useAppDispatch();

  // TODO: Implement pagination
  const { data: coinsData, isLoading } = useGetAllCoinsQuery({
    page: 1,
    pageSize: 10,
  });
  const coins = useMemo(() => coinsData?.data || [], [coinsData]);

  // Filter coins based on search query
  const filteredCoins = useMemo(
    () =>
      coins.filter(
        (coin) =>
          coin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          coin.symbol.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    [coins, searchQuery]
  );

  return (
    <ScreenWrapper>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.mainContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.header}>{t("market.MARKETS")}</Text>
            <TouchableOpacity
              onPress={async () => {
                await SecureStore.deleteItemAsync("isAuthenticated");
                dispatch(setAuthState(false));
              }}
            >
              <Ionicons name="log-out-outline" size={24} color={colors.red} />
            </TouchableOpacity>
          </View>
          <MarketTabsSection
            coins={coins}
            isLoading={isLoading}
            navigation={navigation}
          />
          <AllCoinsSection
            coins={filteredCoins}
            navigation={navigation}
            setSearchQuery={setSearchQuery}
            searchQuery={searchQuery}
          />
        </View>
      </TouchableWithoutFeedback>
    </ScreenWrapper>
  );
}
