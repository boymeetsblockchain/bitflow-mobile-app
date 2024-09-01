import React, { useEffect, useRef } from 'react';
import { Animated, Image, View, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function OnboardingScreen() {
  // Create an animated value
  const zoomValue = useRef(new Animated.Value(1)).current;
  const router = useRouter();

  useEffect(() => {
    // Define the zoom-in and zoom-out animation
    const zoomInOut = Animated.loop(
      Animated.sequence([
        Animated.timing(zoomValue, {
          toValue: 1.2, // Zoom in to 120% size
          duration: 1000, // Duration for zooming in
          useNativeDriver: true,
        }),
        Animated.timing(zoomValue, {
          toValue: 1, // Zoom out to original size
          duration: 1000, // Duration for zooming out
          useNativeDriver: true,
        }),
      ])
    );

    // Start the animation
    zoomInOut.start();

    // Cleanup the animation when the component unmounts
    return () => zoomInOut.stop();
  }, [zoomValue]);

  useEffect(() => {
    // Automatically navigate to "cryptoTradingPlatform" after 3 seconds
    const timer = setTimeout(() => {
      router.push('/splashScreen');
    }, 3000);

    // Cleanup timer if component unmounts
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View style={styles.container}>
      <View style={styles.overlay}>
        <Animated.Image
          style={[styles.logo, { transform: [{ scale: zoomValue }] }]} // Apply animation to scale
          resizeMode='contain'
          source={require('../../assets/images/logo.png')}
        />
      </View>
      <Image
        style={styles.backgroundImage}
        resizeMode='contain'
        source={require('../../assets/images/splash-screen.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    zIndex: 100,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
});
