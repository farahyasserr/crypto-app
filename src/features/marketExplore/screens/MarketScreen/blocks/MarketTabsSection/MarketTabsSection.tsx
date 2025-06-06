import { CoinCard, Tab } from "@/src/components";
import { MARKET_SCREEN_TABS } from "@/src/features/marketExplore/constants";
import { ActiveTab, TabConfig } from "@/src/features/marketExplore/types";
import { Coin } from "@/src/models/Coin";
import { MarketRoutes } from "@/src/navigation/routeTypes";
import { MarketStackNavType } from "@/src/navigation/stacks";
import { colors } from "@/src/ui/colors";
import { useMemo, useState } from "react";
import { ActivityIndicator, FlatList, ScrollView, View } from "react-native";
import { styles } from "./MarketTabsSection.styles";

const MarketTabsSection = ({
  coins,
  isLoading,
  navigation,
}: {
  coins: Coin[];
  isLoading: boolean;
  navigation: MarketStackNavType<MarketRoutes.MarketScreen>;
}) => {
  const [activeTab, setActiveTab] = useState<ActiveTab>(ActiveTab.FEATURED);

  // Sort coins by market cap in descending order and take top 20
  const topMarketCapCoins = useMemo(
    () => [...coins].sort((a, b) => b.marketCap - a.marketCap).slice(0, 20),
    [coins]
  );

  // Get top gainers (coins with highest price change percentage)
  const topGainers = useMemo(
    () =>
      [...coins]
        .sort((a, b) => b.priceChangePercentage24h - a.priceChangePercentage24h)
        .slice(0, 20),
    [coins]
  );

  // Get top losers (coins with lowest price change percentage)
  const topLosers = useMemo(
    () =>
      [...coins]
        .sort((a, b) => a.priceChangePercentage24h - b.priceChangePercentage24h)
        .slice(0, 20),
    [coins]
  );

  const onPressCoinCard = (item: Coin) => {
    navigation.navigate(MarketRoutes.CoinDetailsScreen, {
      product: item,
    });
  };

  // Render content based on active tab
  const renderContent = () => {
    if (isLoading) {
      return (
        <ActivityIndicator
          size="large"
          color={colors.primary}
          style={styles.loader}
        />
      );
    } else {
      return (
        <View style={styles.featuredContainer}>
          <FlatList
            data={
              activeTab === ActiveTab.FEATURED
                ? topMarketCapCoins
                : activeTab === ActiveTab.TOP_GAINERS
                ? topGainers
                : topLosers
            }
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <CoinCard coin={item} onPressCoinCard={onPressCoinCard} />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollViewContent}
            ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
          />
        </View>
      );
    }
  };

  return (
    <View>
      <View style={styles.tabContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {MARKET_SCREEN_TABS.map((tab: TabConfig) => (
            <Tab<ActiveTab>
              key={tab.key}
              tab={tab}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          ))}
        </ScrollView>
      </View>

      {renderContent()}
    </View>
  );
};

export default MarketTabsSection;
