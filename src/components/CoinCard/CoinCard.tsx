import { Coin } from "@/src/models/Coin";
import { colors } from "@/src/ui/colors";
import { SCREEN_WIDTH } from "@/src/ui/metrics";
import { numberWithCommas } from "@/src/utils/numbersFormatUtils";
import { Image } from "expo-image";
import { Text, TouchableOpacity, View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { styles } from "./CoinCard.styles";

// Coin Card Component (for Featured Section)
const CoinCard = ({
  coin,
  onPressCoinCard,
}: {
  coin: Coin;
  onPressCoinCard: (item: Coin) => void;
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
        data: coin.sparkline.slice(-24), // Use last 24 points for simplicity
        color: () => chartColor,
      },
    ],
  };

  return (
    <TouchableOpacity
      style={styles.coinCard}
      onPress={() => onPressCoinCard(coin)}
    >
      <View style={styles.coinInfo}>
        <Image source={{ uri: coin.image }} style={styles.coinIcon} />
        <View>
          <Text style={styles.coinSymbol}>{coin.symbol.toUpperCase()}</Text>
          <Text style={styles.coinName}>{coin.name}</Text>
        </View>
      </View>

      <View style={styles.chartContainer}>
        <LineChart
          data={chartData}
          width={SCREEN_WIDTH * 0.42}
          height={70}
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
          style={styles.chart}
          withDots={false}
          withInnerLines={false}
          withOuterLines={false}
          withHorizontalLabels={false}
          withVerticalLabels={false}
          withShadow={false}
        />
      </View>

      <View style={styles.priceContainer}>
        <Text style={styles.price}>{formattedPrice}</Text>
        <Text
          style={[
            styles.priceChange,
            isPriceUp ? styles.priceUp : styles.priceDown,
          ]}
        >
          {isPriceUp ? "+" : ""}
          {coin.priceChangePercentage24h.toFixed(2)}%
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CoinCard;
