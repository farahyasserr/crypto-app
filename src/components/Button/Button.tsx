import React from "react";
import {
  ActivityIndicator,
  ButtonProps,
  Text,
  TouchableOpacity,
} from "react-native";
import { styles } from "./Button.styles";

type ButtonVariant = "primary" | "secondary";

interface Props extends ButtonProps {
  title: string;
  onPress: () => void;
  type?: ButtonVariant;
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  textColor?: string;
}

const Button: React.FC<Props> = ({
  title,
  type = "primary",
  onPress,
  loading,
  disabled,
  fullWidth = true,
  textColor,
  ...rest
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        styles[disabled ? "disabled" : type],
        fullWidth ? styles.fullWidth : styles.autoWidth,
      ]}
      onPress={onPress}
      disabled={loading || disabled}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator color="grey" size="small" />
      ) : (
        <Text
          style={[styles.buttonText, textColor ? { color: textColor } : null]}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
