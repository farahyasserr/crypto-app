import { Ionicons } from "@expo/vector-icons";
import { t } from "i18next";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./Tab.styles";

type TabProps<T extends string> = {
  tab: {
    key: T;
    icon: any;
    iconColor: string;
    labelKey: string;
  };
  activeTab: T;
  setActiveTab: (tab: T) => void;
};

function Tab<T extends string>({ tab, activeTab, setActiveTab }: TabProps<T>) {
  return (
    <TouchableOpacity
      key={tab.key}
      style={[styles.tab, activeTab === tab.key && styles.activeTab]}
      onPress={() => setActiveTab(tab.key)}
    >
      <Ionicons name={tab.icon} size={18} color={tab.iconColor} />
      <Text style={styles.tabText}>{t(tab.labelKey)}</Text>
    </TouchableOpacity>
  );
}

export default Tab;
