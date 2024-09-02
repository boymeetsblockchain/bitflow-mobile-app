import React from 'react';
import { View, Image, StyleSheet, Text, Dimensions, ImageBackground, SafeAreaView } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import 'react-native-reanimated';
import Button from '../../../components/button';
import tw from 'twrnc';
import { useRouter } from 'expo-router';

export default function SplashPage() {
  // Get the width of the device window
  const router = useRouter();
  const { width } = Dimensions.get('window');

  // Data for the carousel
  const carouselData = [
    {
      id: 1,
      title: "Unlock Your Financial Future",
      text: "Buy, sell, and trade cryptocurrencies with ease.",
      image: require('../../../assets/images/security.png'),
    },
    {
      id: 2,
      title: "Trade with Confidence",
      text: "Secure and reliable cryptocurrency trading platform",
      image: require('../../../assets/images/cloud-coin.png'),
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Background image for the splash screen */}
      <ImageBackground
        style={styles.backgroundImage}
        resizeMode='cover'
        source={require('../../../assets/images/splash-screen.png')}
      >
        {/* Skip text button */}
        <Text onPress={() => router.push("/auth/register")} style={styles.skipText}>Skip</Text>

        {/* Carousel component for displaying slides */}
        <Carousel
          loop
          width={width}
          height={width / 2}
          style={styles.carousel}
          autoPlay
          data={carouselData}
          scrollAnimationDuration={1000}
          onSnapToItem={(index) => console.log('current index:', index)} // Log current index when item changes
          renderItem={({ item }) => (
            <View style={styles.carouselItem}>
              {/* Carousel image */}
              <Image
                style={styles.carouselImage}
                resizeMode='contain'
                source={item.image}
              />
              {/* Text container for carousel item */}
              <View style={styles.textContainer}>
                <Text style={styles.titleText}>{item.title}</Text>
                <Text style={styles.descriptionText}>{item.text}</Text>
              </View>
            </View>
          )}
        />

        {/* Footer section with button and information */}
        <View style={styles.footer}>
          <Button title='Next' onPress={() => router.push("/auth/register")} />
          <View style={tw`flex-row justify-center items-center pt-4`}>
            {/* Lock image */}
            <Image
              style={tw`w-4 h-4 mx-2`}
              resizeMode='contain'
              source={require('../../../assets/images/lock.png')}
            />
            {/* Footer text */}
            <Text style={styles.footerText}>Your information is always secure</Text>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

// Styles for the splash screen components
const styles = StyleSheet.create({
  // Style for the safe area view
  safeArea: {
    flex: 1,
  },
  // Style for the background image
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
  // Style for the skip text button
  skipText: {
    position: 'absolute',
    top: 60,
    right: 20,
    fontSize: 15,
    color: '#FF7422',
    zIndex: 50,
  },
  // Style for the carousel component
  carousel: {
    position: 'absolute',
    zIndex: 20,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingTop: 700,
    alignItems: 'center',
    height: '100%',
  },
  // Style for each carousel item
  carouselItem: {
    flex: 1,
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  // Style for the carousel image
  carouselImage: {
    width: '70%',
    height: 300,
  },
  // Style for the text container in the carousel item
  textContainer: {
    alignItems: 'center',
    paddingTop: 20,
  },
  // Style for the title text in the carousel item
  titleText: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
  },
  // Style for the description text in the carousel item
  descriptionText: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    paddingTop: 20,
  },
  // Style for the footer section
  footer: {
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  // Style for the footer text
  footerText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
  },
});
