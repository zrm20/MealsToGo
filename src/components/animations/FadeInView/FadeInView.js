import React, { useRef, useEffect } from 'react';
import { Animated } from 'react-native';

export default function FadeInView({ duration = 1000, startingOpacity = 0, endingOpacity = 1, ...props }) {
  const fadeAnim = useRef(new Animated.Value(startingOpacity)).current

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: endingOpacity,
        duration,
        useNativeDriver: true
      }
    ).start();
  }, [fadeAnim])

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnim,
      }}
    >
      {props.children}
    </Animated.View>
  );
};