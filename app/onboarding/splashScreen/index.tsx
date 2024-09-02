import React from 'react';
import { View, Image, StyleSheet, Text, Dimensions, ImageBackground, Button, SafeAreaView } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import 'react-native-reanimated';

export default function SplashPage() {
  const width = Dimensions.get('window').width;
  
  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        style={styles.backgroundImage}
        resizeMode='cover'
        source={require('../../../assets/images/splash-screen.png')}
      >
        <Text style={styles.skipText}>Skip</Text>
        <Carousel
          loop
          width={width}
          height={width / 2}
          style={styles.carousel}
          autoPlay={true}
          data={[
            { id: 1, title: "Unlock Your Financial Future", text: "Buy, sell, and trade cryptocurrencies with ease.", image: require('../../../assets/images/security.png') },
            { id: 2, title: "Trade with Confidence", text: "Secure and reliable cryptocurrency trading platform", image: require('../../../assets/images/cloud-coin.png') }
          ]}
          scrollAnimationDuration={1000}
          onSnapToItem={(index) => console.log('current index:', index)}
          renderItem={({ item }) => (
            <View style={styles.carouselItem}>
              <Image
                style={styles.carouselImage}
                resizeMode='contain'
                source={item.image}
              />
              <View style={styles.textContainer}>
                <Text style={styles.titleText}>{item.title}</Text>
                <Text style={styles.descriptionText}>{item.text}</Text>
              </View>
            </View>
          )}
        />
        <View style={styles.footer}>
          <Button title='Next' color="#E5770E" onPress={() => console.log('Next button pressed')} />
          <Text style={styles.footerText}>Your information is always secure</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
  skipText: {
    position: "absolute",
    top: 60,
    color: "#FF7422",
    right: 20,
    fontSize: 18,
    zIndex: 50,
  },
  carousel: {
    position: "absolute",
    zIndex: 20,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    height: "100%",
  },
  carouselItem: {
    flex: 1,
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  carouselImage: {
    width: "70%",
    height: 300,
  },
  textContainer: {
    alignItems: 'center',
    paddingTop: 20,
  },
  titleText: {
    textAlign: 'center',
    fontSize: 24,
    color: "white",
  },
  descriptionText: {
    textAlign: 'center',
    fontSize: 20,
    color: "white",
    paddingTop: 20,
  },
  footer: {
    paddingBottom: 80,
    paddingHorizontal: 20,
  },
  footerText: {
    color: "white",
    textAlign: "center",
    paddingTop: 20,
    fontSize: 16,
  },
});
