import { SearchBar } from "@/src/components";
import CoinListItem from "@/src/components/CoinListItem/CoinListItem";
import { Coin } from "@/src/models/Coin";
import { MarketRoutes } from "@/src/navigation/routeTypes";
import { MarketStackNavType } from "@/src/navigation/stacks";
import { colors } from "@/src/ui/colors";
import { t } from "i18next";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { styles } from "./AllCoinsSection.styles";

const AllCoinsSection = ({
  coins,
  navigation,
  setSearchQuery,
  searchQuery,
  onEndReached,
  isLoadingMore,
}: {
  coins: Coin[];
  navigation: MarketStackNavType<MarketRoutes.MarketScreen>;
  setSearchQuery: (text: string) => void;
  searchQuery: string;
  onEndReached?: () => void;
  isLoadingMore?: boolean;
}) => {
  const onPressCoinListItem = (item: Coin) => {
    navigation.navigate(MarketRoutes.CoinDetailsScreen, {
      product: item,
    });
  };

  const onChangeSearchQuery = (text: string) => {
    setSearchQuery(text);
  };

  const renderFooter = () => {
    if (!isLoadingMore) return null;

    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="small" color={colors.primary} />
      </View>
    );
  };

  return (
    <View style={styles.allCoinsContainer}>
      <View style={styles.allCoinsHeader}>
        <Text style={styles.allCoinsTitle}>{t("market.ALL_COINS")}</Text>
        <SearchBar
          onChangeSearchQuery={onChangeSearchQuery}
          searchQuery={searchQuery}
          animated={true}
          initialFlex={0.5}
          finalFlex={1}
        />
      </View>
      <FlatList
        data={coins}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CoinListItem coin={item} onPressCoinListItem={onPressCoinListItem} />
        )}
        showsVerticalScrollIndicator={false}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
};

export default AllCoinsSection;
