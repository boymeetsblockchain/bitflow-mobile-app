import React, { useEffect, useState } from "react";
import { View, ActivityIndicator, ScrollView } from "react-native";
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
          "https://bitflow-backend-server.vercel.app/api/crypto/market?cryptos=BTC,ETH,DOGE,ADA,XRP,SOL,DOT,BCH,LTC,UNI,LINK,AVAX,FTM,MATIC,ATOM,ALGO,VET,XMR,XLM,TRX"
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
      <View style={tw`flex-1 justify-center items-center`}>
        <ActivityIndicator size="large" color="#E5770E" />
      </View>
    );
  }

  return (
    <ScrollView style={tw`w-full my-3`} showsVerticalScrollIndicator={false}>
      <View style={tw`bg-[#E5770E] rounded-md p-3 mb-3`}>
        <TextWrapper style={tw`text-white text-center text-sm font-bold`}>
          Market Statistics
        </TextWrapper>
      </View>

      {/* Loop through the cryptocurrency data */}
      <View style={tw`flex-wrap flex-row justify-between`}>
        {Object.keys(cryptoData).map((key, index) => (
          <View
            key={index}
            style={tw`bg-gray-900 border border-gray-700 p-3 rounded-lg w-[48%] mb-4 flex-row justify-between items-center`}
          >
            <TextWrapper style={tw`text-white text-xs`}>
              {cryptoData[key].name} ({cryptoData[key].symbol})
            </TextWrapper>
            <View style={tw`flex-col items-end`}>
              <TextWrapper style={tw`text-white text-xs`}>
                ${cryptoData[key].price?.toFixed(2)}
              </TextWrapper>
              <TextWrapper
                style={tw`text-xs ${
                  cryptoData[key].percentageChange >= 0
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {cryptoData[key].percentageChange.toFixed(2)}%
              </TextWrapper>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};
