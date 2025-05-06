import { Coin } from "@/src/models/Coin";
import { colors } from "@/src/ui/colors";
import { scaleHeight, SCREEN_WIDTH } from "@/src/ui/metrics";
import { numberWithCommas } from "@/src/utils/numbersFormatUtils";
import { Image } from "expo-image";
import { Text, TouchableOpacity, View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { styles } from "./CoinListItem.styles";

// Coin List Item Component (for All Coins Section)
const CoinListItem = ({
  coin,
  onPressCoinListItem,
}: {
  coin: Coin;
  onPressCoinListItem: (item: Coin) => void;
}) => {
  const isPriceUp = coin.priceChangePercentage24h >= 0;
  const chartColor = isPriceUp ? colors.primary : colors.red;

  // Format price with commas
  const formattedPrice = `$${numberWithCommas(
    parseFloat(coin.currentPrice.toFixed(2))
  )}`;

  // Prepare data for the chart
  const chartData = {
    labels: [],
    datasets: [
      {
        data: coin.sparkline,
        color: () => chartColor,
      },
    ],
  };

  return (
    <TouchableOpacity
      style={styles.coinListItem}
      onPress={() => onPressCoinListItem(coin)}
    >
      <View style={styles.verticalContainer}>
        <View style={styles.coinListItemLeft}>
          <Image source={{ uri: coin.image }} style={styles.coinListIcon} />
          <View>
            <Text style={styles.coinListSymbol}>
              {coin.symbol.toUpperCase()}
            </Text>
            <Text style={styles.coinListName}>{coin.name}</Text>
          </View>
        </View>
        <Text style={styles.coinListPrice}>{formattedPrice}</Text>
      </View>

      <View style={styles.coinListItemRight}>
        <View style={styles.priceChangeContainer}>
          <Text
            style={[
              styles.priceChangeBadge,
              isPriceUp ? styles.priceUp : styles.priceDown,
            ]}
          >
            {isPriceUp ? "+" : ""}
            {coin.priceChangePercentage24h.toFixed(2)}%
          </Text>
        </View>

        <LineChart
          data={chartData}
          width={SCREEN_WIDTH * 0.5}
          height={scaleHeight(50)}
          chartConfig={{
            backgroundGradientFrom: colors.grey2,
            backgroundGradientTo: colors.grey2,
            decimalPlaces: 2,
            color: () => chartColor,
            labelColor: () => "transparent",
            propsForDots: {
              r: "0",
            },
            propsForBackgroundLines: {
              stroke: "transparent",
            },
            strokeWidth: 1.5,
          }}
          bezier
          style={styles.miniChart}
          withDots={false}
          withInnerLines={false}
          withOuterLines={false}
          withHorizontalLabels={false}
          withVerticalLabels={false}
          withShadow={false}
        />
      </View>
    </TouchableOpacity>
  );
};

export default CoinListItem;
