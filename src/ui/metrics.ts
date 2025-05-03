import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const SCREEN_WIDTH = width;
export const SCREEN_HEIGHT = height;
export const HORIZONTAL_SCREEN_PADDING = "6.4%";

// Base dimensions (as per designs)
const BASE_WIDTH = 375;
const BASE_HEIGHT = 812;

// Scaling Factor calculation
const SCALING_FACTOR_HEIGHT = SCREEN_HEIGHT / BASE_HEIGHT;
const SCALING_FACTOR_WIDTH = SCREEN_WIDTH / BASE_WIDTH;

// This functions accepts a number instead of tamagui tokens
export const scaleHeight = (size: number) => {
  return size * SCALING_FACTOR_HEIGHT;
};

export const scaleWidth = (size: number) => {
  return size * SCALING_FACTOR_WIDTH;
};
