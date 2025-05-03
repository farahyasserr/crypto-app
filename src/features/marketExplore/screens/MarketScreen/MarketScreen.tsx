import CoinListItem from "@/src/components/CoinListItem/CoinListItem";
import { Coin } from "@/src/models/Coin";
import { MarketStackNavType } from "@/src/navigation";
import { MarketRoutes } from "@/src/navigation/routeTypes";
import { useGetAllCoinsQuery } from "@/src/services/coinApi/coinApi";
import { colors } from "@/src/ui/colors";
import { Ionicons } from "@expo/vector-icons";
import { t } from "i18next";
import React, { useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  TextInput,
  View,
} from "react-native";
import { styles } from "./MarketScreen.styles";
import { MarketTabsSection } from "./blocks";

export default function MarketScreen({
  navigation,
}: {
  navigation: MarketStackNavType<MarketRoutes.MarketScreen>;
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  // Use RTK Query hook with pagination
  const {
    data: coinsData,
    isLoading,
    isFetching,
  } = useGetAllCoinsQuery({
    page: currentPage,
    pageSize,
  });

  // Use optional chaining to safely access the data
  const coins = coinsData?.data || [];

  // Filter coins based on search query
  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle loading more coins
  const handleLoadMore = () => {
    if (!isLoading && !isFetching) {
      setCurrentPage(currentPage + 1);
    }
  };

  // All Coins Section Component
  const AllCoinsSection = ({ coins }: { coins: Coin[] }) => {
    const onPressCoinListItem = (item: Coin) => {
      navigation.navigate(MarketRoutes.CoinDetailsScreen, {
        product: item,
      });
    };

    return (
      <View style={styles.allCoinsContainer}>
        <View style={styles.allCoinsHeader}>
          <Text style={styles.allCoinsTitle}>{t("market.ALL_COINS")}</Text>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder={t("market.SEARCH")}
              placeholderTextColor="#666"
              onChangeText={setSearchQuery}
              value={searchQuery}
            />
            <Ionicons
              name="search"
              size={20}
              color="#666"
              style={styles.searchIcon}
            />
          </View>
        </View>

        <FlatList
          data={coins}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CoinListItem
              coin={item}
              onPressCoinListItem={onPressCoinListItem}
            />
          )}
          showsVerticalScrollIndicator={false}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
          ListFooterComponent={
            isFetching ? (
              <View style={styles.loaderContainer}>
                <ActivityIndicator size="small" color={colors.primary} />
              </View>
            ) : null
          }
        />
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.header}>{t("market.MARKETS")}</Text>
      <MarketTabsSection
        coins={coins}
        isLoading={isLoading}
        navigation={navigation}
      />
      <AllCoinsSection coins={filteredCoins} />
    </View>
  );
}
