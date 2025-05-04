import * as Font from "expo-font";
import { useEffect, useState } from "react";

// Custom hook for loading fonts
const useLoadFonts = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        LufgaRegular: require("../../assets/fonts/LufgaRegular.ttf"),
        // Add other font weights if needed
      });
      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

  return fontsLoaded;
};

export default useLoadFonts;
