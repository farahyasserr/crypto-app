import { scaleHeight } from "@/src/ui/metrics";
import React, { ReactNode, useMemo } from "react";
import { Platform, ScrollView, View } from "react-native";
import { Edge, SafeAreaView } from "react-native-safe-area-context";
import { createStyles } from "./ScreenWrapper.styles";

interface ScreenWrapperProps {
  children: ReactNode;
  noSafeArea?: boolean;
  scrollable?: boolean;
  backgroundColor?: string;
  paddingBottom?: boolean;
}

const ScreenWrapper: React.FC<ScreenWrapperProps> = ({
  children,
  backgroundColor,
  noSafeArea = false,
  scrollable = false,
  paddingBottom,
}) => {
  const styles = createStyles(noSafeArea, backgroundColor);

  const edges: Edge[] = useMemo(
    () => (noSafeArea ? [] : ["top"]),
    [noSafeArea]
  );
  const ContainerComponent = useMemo(
    () => (scrollable ? ScrollView : View),
    [scrollable]
  );

  return (
    <SafeAreaView edges={edges} style={[styles.safeArea]}>
      <ContainerComponent
        showsVerticalScrollIndicator={false}
        contentContainerStyle={scrollable ? { flexGrow: 1 } : undefined}
        style={{
          flex: 1,
          marginBottom: Platform.OS === "android" ? scaleHeight(16) : 0,
          paddingBottom: paddingBottom ? scaleHeight(50) : undefined,
        }}
      >
        <View style={{ flex: 1 }}>{children}</View>
      </ContainerComponent>
    </SafeAreaView>
  );
};

export default ScreenWrapper;
