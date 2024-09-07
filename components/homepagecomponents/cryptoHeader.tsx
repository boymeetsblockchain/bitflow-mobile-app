import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { TextWrapper } from "../textWrapper";
import tw from "twrnc";
import axios from "axios";

export const CryptoHeader = () => {
  const [cryptoData, setCryptoData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Fetch data from the API
    const fetchCryptoData = async () => {
      try {
        const response = await axios.get("https://bitflow-backend-server.vercel.app/api/crypto/market?cryptos=BTC");
        setCryptoData(response.data.BTC);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching crypto data", error);
        setLoading(false);
      }
    };

    fetchCryptoData();
  }, []);

  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" color="#E5770E" />
      </View>
    );
  }

  return (
    <View style={tw`p-1.5 px-2 rounded-md  bg-transparent  flex-row items-center justify-between`}>
      <TextWrapper style={tw`text-white  text-sm`}>Bitcoin</TextWrapper>
      
      <View style={tw`flex-row items-center gap-x-2`}>
        <TextWrapper style={tw`text-gray-200  text-sm`}>
          ${cryptoData?.price?.toFixed(2)}
        </TextWrapper>
        <TextWrapper
          style={tw`text-sm ${
            cryptoData?.percentageChange >= 0 ? "text-green-500" : "text-red-500"
          }`}
        >
          {cryptoData?.percentageChange.toFixed(2)}%
        </TextWrapper>
      </View>
    </View>
  );
};
