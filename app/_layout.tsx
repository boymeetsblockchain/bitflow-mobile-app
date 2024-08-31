import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import React, { useEffect, useState } from "react";
import AppLoading from "expo-app-loading";

const fetchFonts = () => {
  return Font.loadAsync({
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
  });
};

export default function RootLayout() {
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    const prepareData = async () => {
      try {
        await SplashScreen.preventAutoHideAsync();

        // Load fonts
        await fetchFonts();

        // Mark data as loaded
        setDataLoaded(true);
        
        // Hide the splash screen after data has loaded
        await SplashScreen.hideAsync();
      } catch (error) {
        console.error(error);
        // Consider adding a fallback UI or retry mechanism here
      }
    };

    prepareData();
  }, []);


  if(!dataLoaded){
  <AppLoading/>
  }
  return <Slot />;
}
