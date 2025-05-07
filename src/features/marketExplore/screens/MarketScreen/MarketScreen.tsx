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
import React, { useCallback, useMemo, useState } from "react";
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

const PAGE_SIZE = 10;
const ITEMS_TO_SHOW_PER_TAB = 20;

export default function MarketScreen({
  navigation,
}: {
  navigation: MarketStackNavType<MarketRoutes.MarketScreen>;
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useAppDispatch();

  const {
    data: coinsData,
    isLoading,
    isFetching,
  } = useGetAllCoinsQuery({
    page: currentPage,
    pageSize: PAGE_SIZE,
  });

  const coins = useMemo(() => coinsData?.data || [], [coinsData]);
  const totalPages = useMemo(() => coinsData?.totalPages || 0, [coinsData]);

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

  const loadMoreCoins = useCallback(() => {
    if (!isFetching && currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  }, [currentPage, totalPages, isFetching]);

  // Logout handler
  const onPressLogout = async () => {
    await SecureStore.deleteItemAsync("isAuthenticated");
    dispatch(setAuthState(false));
  };

  return (
    <ScreenWrapper>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.mainContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.header}>{t("market.MARKETS")}</Text>
            <TouchableOpacity onPress={onPressLogout}>
              <Ionicons name="log-out-outline" size={24} color={colors.red} />
            </TouchableOpacity>
          </View>
          <MarketTabsSection
            coins={coins.slice(0, ITEMS_TO_SHOW_PER_TAB)}
            isLoading={isLoading}
            navigation={navigation}
          />
          {filteredCoins?.length || searchQuery ? (
            <AllCoinsSection
              coins={filteredCoins}
              navigation={navigation}
              setSearchQuery={setSearchQuery}
              searchQuery={searchQuery}
              onEndReached={searchQuery ? undefined : loadMoreCoins}
              isLoadingMore={!isLoading && isFetching}
            />
          ) : null}
        </View>
      </TouchableWithoutFeedback>
    </ScreenWrapper>
  );
}
