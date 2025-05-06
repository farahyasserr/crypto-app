import { SearchBar } from "@/src/components";
import CoinListItem from "@/src/components/CoinListItem/CoinListItem";
import { Coin } from "@/src/models/Coin";
import { MarketStackNavType } from "@/src/navigation";
import { MarketRoutes } from "@/src/navigation/routeTypes";
import { t } from "i18next";
import { FlatList, Text, View } from "react-native";
import { styles } from "./AllCoinsSection.styles";

const AllCoinsSection = ({
  coins,
  navigation,
  setSearchQuery,
  searchQuery,
}: {
  coins: Coin[];
  navigation: MarketStackNavType<MarketRoutes.MarketScreen>;
  setSearchQuery: (text: string) => void;
  searchQuery: string;
}) => {
  const onPressCoinListItem = (item: Coin) => {
    navigation.navigate(MarketRoutes.CoinDetailsScreen, {
      product: item,
    });
  };

  const onChangeSearchQuery = (text: string) => {
    setSearchQuery(text);
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
      />
    </View>
  );
};

export default AllCoinsSection;
