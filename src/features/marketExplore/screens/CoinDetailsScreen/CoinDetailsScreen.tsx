import { images } from "@/assets/images";
import { Coin } from "@/src/models/Coin";
import { MarketRoutes } from "@/src/navigation/routeTypes";
import { MarketStackNavType } from "@/src/navigation/stacks";
import { useGetCoinOHLCQuery } from "@/src/services/coinApi/coinApi";
import { colors } from "@/src/ui/colors";
import { SCREEN_WIDTH } from "@/src/ui/metrics";
import { Ionicons } from "@expo/vector-icons";
import { RouteProp } from "@react-navigation/native";
import { t } from "i18next";
import React, { useEffect, useMemo, useState } from "react";
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { LineChart } from "react-native-gifted-charts";
import { PRODUCT_DETAILS_TIMEFRAMES } from "../../constants";
import { ActiveTimeframe } from "../../types";
import { styles } from "./CoinDetailsScreen.styles";
import { getTimeframeInDays } from "./blocks/utils/coinDetailsUtils";

type CoinDetailsScreenProps = {
  navigation: MarketStackNavType<MarketRoutes.CoinDetailsScreen>;
  route: RouteProp<any, MarketRoutes.CoinDetailsScreen>;
};

export default function CoinDetailsScreen({
  navigation,
  route,
}: CoinDetailsScreenProps) {
  const [coinData, setCoinData] = useState<{
    chartData: { value: number }[];
  } | null>(null);
  const [timeframe, setTimeframe] = useState<ActiveTimeframe>(
    ActiveTimeframe.ONE_HOUR
  );
  const { product } = route.params as { product: Coin };

  const yAxisOffset = useMemo(() => {
    const lowest = coinData?.chartData?.reduce((min, item) => {
      return Math.min(min, item.value);
    }, Infinity);
    const lowestMinus20 = (lowest || 0) - 20;
    return lowestMinus20 < 0 ? 0 : lowestMinus20; // Return zero if lowest score is less than 0
  }, [coinData]);

  const { data: coinDetails, isLoading: isLoadingCoinDetails } =
    useGetCoinOHLCQuery({
      productId: product.productId,
      days: getTimeframeInDays(timeframe),
    });

  useEffect(() => {
    // Basic coin data
    if (coinDetails) {
      setCoinData({
        chartData: coinDetails.map((dataPoint) => ({
          value: dataPoint.usd.close,
          date: dataPoint.time,
        })),
      });
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

  const onPressBack = () => navigation.goBack();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={onPressBack}>
            <Ionicons name="arrow-back" size={22} color={colors.white} />
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
          <View style={styles.placeholderView} />
        </View>

        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>
            $ {product?.currentPrice.toLocaleString()}
          </Text>
          {product?.priceChangePercentage24h && (
            <View style={styles.changeContainer}>
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
                {Math.abs(product?.priceChangePercentage24h).toFixed(2)} %
              </Text>
            </View>
          )}
        </View>

        <View style={styles.chartContainer}>
          {coinData?.chartData && (
            <LineChart
              data={coinData.chartData}
              width={SCREEN_WIDTH - 100}
              height={180}
              yAxisOffset={yAxisOffset}
              noOfSections={5}
              adjustToWidth
              color1={
                product?.priceChangePercentage24h >= 0
                  ? colors.primary
                  : colors.red
              }
              animateOnDataChange
              disableScroll
              hideDataPoints1
              isAnimated
              focusEnabled
              showDataPointOnFocus
              showStripOnFocus
              showTextOnFocus
              showDataPointLabelOnFocus
            />
          )}
        </View>

        <View style={styles.blueHaloContainer}>
          <Image source={images.blueHaloImage} />
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
