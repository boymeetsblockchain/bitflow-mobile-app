import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { TextWrapper } from "../textWrapper";
import tw from "twrnc";
import axios from "axios";

export const CryptoCard = () => {
  const [cryptoData, setCryptoData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await axios.get(
          "https://bitflow-backend-server.vercel.app/api/crypto/market?cryptos=BTC,ETH"
        );
        setCryptoData(response.data);
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
      <View style={tw` justify-center items-center`}>
        <ActivityIndicator size="large" color="#E5770E" />
      </View>
    );
  }

  return (
    <View style={tw`w-full my-3`}>

      <View style={tw`gap-y-3`}>
        {/* Bitcoin Card */}
        <View
          style={tw`bg-gray-900 border border-gray-700 p-3 rounded-lg flex-row justify-between items-center `}
        >
          <TextWrapper style={tw`text-white`} fontWeight="bold">
            Bitcoin (BTC)
          </TextWrapper>
          <View style={tw`flex-col items-end`}>
            <TextWrapper style={tw`text-white text-xs`}>
              ${cryptoData?.BTC?.price?.toFixed(2)}
            </TextWrapper>
            <TextWrapper
              style={tw`text-xs ${
                cryptoData?.BTC?.percentageChange >= 0
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {cryptoData?.BTC?.percentageChange.toFixed(2)}%
            </TextWrapper>
          </View>
        </View>

        {/* Ethereum Card */}
        <View
          style={tw`bg-gray-900 border border-gray-700 p-3 rounded-lg flex-row justify-between items-center `}
        >
          <TextWrapper style={tw`text-white`} fontWeight="bold">
            Ethereum (ETH)
          </TextWrapper>
          <View style={tw`flex-col items-end`}>
            <TextWrapper style={tw`text-white text-xs`}>
              ${cryptoData?.ETH?.price?.toFixed(2)}
            </TextWrapper>
            <TextWrapper
              style={tw`text-xs ${
                cryptoData?.ETH?.percentageChange >= 0
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {cryptoData?.ETH?.percentageChange.toFixed(2)}%
            </TextWrapper>
          </View>
        </View>
      </View>
    </View>
  );
};
