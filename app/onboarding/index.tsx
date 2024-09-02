import React, { useEffect, useRef } from 'react';
import { Animated, View, StyleSheet, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';

const OnboardingScreen: React.FC = () => {
  // Create an animated value for zoom effect
  const zoomValue = useRef(new Animated.Value(1)).current;
  const router = useRouter();

  useEffect(() => {
    // Define the zoom-in and zoom-out animation sequence
    const zoomInOut = Animated.loop(
      Animated.sequence([
        Animated.timing(zoomValue, {
          toValue: 1.2, // Zoom in to 120% size
          duration: 1000, // Duration for zooming in
          useNativeDriver: true, // Use native driver for better performance
        }),
        Animated.timing(zoomValue, {
          toValue: 1, // Zoom out to original size
          duration: 1000, // Duration for zooming out
          useNativeDriver: true, // Use native driver for better performance
        }),
      ])
    );

    // Start the zoom animation
    zoomInOut.start();

    // Cleanup the animation when the component unmounts
    return () => zoomInOut.stop();
  }, [zoomValue]);

  useEffect(() => {
    // Automatically navigate to "splashScreen" after 3 seconds
    const timer = setTimeout(() => {
      router.push('/onboarding/splashScreen');
    }, 3000);

    // Cleanup timer if component unmounts
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <ImageBackground
      source={require('../../assets/images/splash-screen.png')}
      style={styles.container}
    >
      <View style={styles.overlay}>
        <Animated.Image
          style={[styles.logo, { transform: [{ scale: zoomValue }] }]} // Apply zoom animation
          resizeMode='contain'
          source={require('../../assets/images/logo.png')}
        />
      </View>
    </ImageBackground>
  );
};

// Styles for the component
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: "100%",
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
  },
  logo: {
    width: 150,
    height: 150,
  },
});

export default OnboardingScreen;
