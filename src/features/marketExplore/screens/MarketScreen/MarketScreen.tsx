import { ScreenWrapper } from "@/src/components";
import { MarketRoutes } from "@/src/navigation/routeTypes";
import { MarketStackNavType } from "@/src/navigation/stacks";
import { useGetAllCoinsQuery } from "@/src/services/coinApi/coinApi";
import { t } from "i18next";
import React, { useMemo, useState } from "react";
import { Keyboard, Text, TouchableWithoutFeedback, View } from "react-native";
import { styles } from "./MarketScreen.styles";
import { MarketTabsSection } from "./blocks";
import AllCoinsSection from "./blocks/AllCoinsSection/AllCoinsSection";

export default function MarketScreen({
  navigation,
}: {
  navigation: MarketStackNavType<MarketRoutes.MarketScreen>;
}) {
  const [searchQuery, setSearchQuery] = useState("");

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
          <Text style={styles.header}>{t("market.MARKETS")}</Text>
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
