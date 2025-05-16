import { useRef } from "react";
import { Animated, Easing } from "react-native";

export const useAnimation = () => {
  const animatedOpacity = useRef(new Animated.Value(0)).current;
  const animatedTop = useRef(new Animated.Value(0)).current;

  const fadeIn = ({
    duration = 300,
    toValue = 1,
    useNativeDriver = true,
    easing = Easing.linear,
    callback = () => {},
  } = {}) => {
    Animated.timing(animatedOpacity, { toValue, duration, useNativeDriver, easing }).start();
  };

  const fadeOut = ({
    duration = 300,
    toValue = 0,
    useNativeDriver = true,
    easing = Easing.ease,
    callback = () => {},
  } = {}) => {
    Animated.timing(animatedOpacity, { toValue, duration, useNativeDriver, easing }).start(callback);
  };

  const slideInFromTop = ({
    initialValue = -100,
    duration = 300,
    toValue = 0,
    useNativeDriver = true,
    easing = Easing.ease,
    callback = () => {},
  } = {}) => {
    animatedTop.setValue(initialValue);
    Animated.timing(animatedTop, { toValue, duration, easing, useNativeDriver }).start(callback);
  };

  return { animatedTop, animatedOpacity, fadeIn, fadeOut, slideInFromTop };
};
