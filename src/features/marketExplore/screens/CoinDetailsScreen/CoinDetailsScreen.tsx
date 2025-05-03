import { Coin } from "@/src/models/Coin";
import { MarketStackNavType } from "@/src/navigation";
import { MarketRoutes } from "@/src/navigation/routeTypes";
import { useGetCoinOHLCQuery } from "@/src/services/coinApi/coinApi";
import { colors } from "@/src/ui/colors";
import { RouteProp } from "@react-navigation/native";
import { t } from "i18next";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { LineChart } from "react-native-chart-kit";
import { PRODUCT_DETAILS_TIMEFRAMES } from "../../constants";
import { ActiveTimeframe } from "../../types";
import { styles } from "./CoinDetailsScreen.styles";

type CoinDetailsScreenProps = {
  navigation: MarketStackNavType<MarketRoutes.CoinDetailsScreen>;
  route: RouteProp<any, MarketRoutes.CoinDetailsScreen>;
};

export default function CoinDetailsScreen({
  navigation,
  route,
}: CoinDetailsScreenProps) {
  const [coinData, setCoinData] = useState<any | null>(null);
  const [timeframe, setTimeframe] = useState<ActiveTimeframe>(
    ActiveTimeframe.ONE_HOUR
  );
  const { product } = route.params as { product: Coin };

  // Convert timeframe to days for the API
  const getTimeframeInDays = (
    timeframe: ActiveTimeframe
  ): "1" | "7" | "30" | "365" | "max" => {
    switch (timeframe) {
      case ActiveTimeframe.ONE_HOUR:
        return "1"; // 1 day of hourly data
      case ActiveTimeframe.ONE_DAY:
        return "1";
      case ActiveTimeframe.ONE_WEEK:
        return "7";
      case ActiveTimeframe.ONE_MONTH:
        return "30";
      case ActiveTimeframe.ONE_YEAR:
        return "365";
      case ActiveTimeframe.ALL:
        return "max";
      default:
        return "1";
    }
  };

  const { data: coinDetails, isLoading: isLoadingCoinDetails } =
    useGetCoinOHLCQuery({
      productId: product.productId,
      days: getTimeframeInDays(timeframe),
    });

  useEffect(() => {
    if (coinDetails) {
      const chartData = {
        labels: [], // To hide labels and use the chart's built-in formatting
        datasets: [
          {
            data: coinDetails.map((dataPoint) => dataPoint.usd.close), // Using the close price
            color: (opacity = 1) => `rgba(134, 255, 0, ${opacity})`,
          },
        ],
      };
      setCoinData({ ...chartData });
    }
  }, [timeframe, coinDetails]);

  const handleTimeframeChange = (newTimeframe: ActiveTimeframe) => {
    setTimeframe(newTimeframe);
  };

  if (isLoadingCoinDetails) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backButtonText}>←</Text>
          </TouchableOpacity>
          <View style={styles.coinInfo}>
            <Image
              source={{
                uri: product.image,
              }}
              style={styles.coinLogo}
            />
            <Text style={styles.coinName}>
              {product?.name} ({product?.symbol})
            </Text>
          </View>
        </View>

        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>
            $ {product?.currentPrice.toLocaleString()}
          </Text>
          {product?.priceChangePercentage24h && (
            <View
              style={[
                styles.changeContainer,
                {
                  backgroundColor:
                    product?.priceChangePercentage24h >= 0
                      ? "rgba(134, 255, 0, 0.2)"
                      : "rgba(255, 59, 59, 0.2)",
                },
              ]}
            >
              <Text
                style={[
                  styles.changeText,
                  {
                    color:
                      product?.priceChangePercentage24h >= 0
                        ? colors.primary
                        : colors.red,
                  },
                ]}
              >
                {product?.priceChangePercentage24h >= 0 ? "+ " : "- "}
                {Math.abs(product?.priceChangePercentage24h).toFixed(2)}%
              </Text>
            </View>
          )}
        </View>

        <View style={styles.chartContainer}>
          {coinData?.chartData && (
            <LineChart
              data={coinData.chartData}
              width={350}
              height={220}
              chartConfig={{
                backgroundColor: "#1E1E1E",
                backgroundGradientFrom: "#1E1E1E",
                backgroundGradientTo: "#1E1E1E",
                decimalPlaces: 0,
                color: (opacity = 1) => `rgba(134, 255, 0, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: "0",
                },
                propsForBackgroundLines: {
                  stroke: "rgba(255, 255, 255, 0.1)",
                  strokeWidth: 1,
                },
                strokeWidth: 2,
              }}
              bezier
              style={styles.chart}
              withDots={false}
              withShadow={false}
              withVerticalLines={false}
              withHorizontalLines={true}
              withVerticalLabels={false}
              withHorizontalLabels={true}
            />
          )}
        </View>

        <View style={styles.timeframeContainer}>
          {PRODUCT_DETAILS_TIMEFRAMES.map((time) => (
            <TouchableOpacity
              key={time.key}
              style={[
                styles.timeframeButton,
                timeframe === time.key && styles.activeTimeframeButton,
              ]}
              onPress={() => handleTimeframeChange(time.key)}
            >
              <Text
                style={[
                  styles.timeframeText,
                  timeframe === time.key && styles.activeTimeframeText,
                ]}
              >
                {t(time.labelKey)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}
