import { colors } from "@/src/ui/colors";
import { Ionicons } from "@expo/vector-icons";
import { t } from "i18next";
import { useState } from "react";
import { TextInput, TouchableOpacity } from "react-native";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { styles } from "./SearchBar.styles";

const SearchBar = ({
  onChangeSearchQuery,
  searchQuery,
  animated = false,
  initialFlex = 0.5,
  finalFlex = 1,
  containerStyle = {},
}: {
  onChangeSearchQuery: (text: string) => void;
  searchQuery: string;
  animated?: boolean;
  initialFlex?: number;
  finalFlex?: number;
  containerStyle?: any;
}) => {
  const handleClearSearch = () => onChangeSearchQuery("");
  const [isFocused, setIsFocused] = useState(false);

  // Create animated style for the container
  const animatedStyle = useAnimatedStyle(() => {
    if (!animated) return {};

    return {
      flex: withTiming(isFocused ? finalFlex : initialFlex, {
        duration: 300,
      }),
    };
  }, [isFocused, animated, initialFlex, finalFlex]);

  return (
    <Animated.View
      style={[
        styles.searchContainer,
        animated ? animatedStyle : { flex: initialFlex },
        containerStyle,
      ]}
    >
      <TextInput
        style={styles.searchInput}
        placeholder={t("market.SEARCH")}
        placeholderTextColor={colors.placeholder}
        onChangeText={onChangeSearchQuery}
        value={searchQuery}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {searchQuery ? (
        <TouchableOpacity onPress={handleClearSearch} style={styles.icon}>
          <Ionicons name="close-circle" size={20} color={colors.placeholder} />
        </TouchableOpacity>
      ) : (
        <Ionicons
          name="search"
          size={20}
          color={colors.placeholder}
          style={styles.icon}
        />
      )}
    </Animated.View>
  );
};

export default SearchBar;
