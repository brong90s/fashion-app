import React, { useRef } from "react";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
// import { useValue } from "react-native-redash";
import { useValue, onScrollEvent } from "react-native-redash/lib/module/v1";
import Animated, { multiply, useAnimatedRef } from "react-native-reanimated";

import Slide, { SLIDE_HEIGHT } from "./Slide";
import Subslide from "./Subslide";

const { width } = Dimensions.get("window");
const BORDER_RADIUS = 75;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  slider: {
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: 75,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flexDirection: "row",
    backgroundColor: "white",
    borderTopLeftRadius: BORDER_RADIUS,
  },
});

const slides = [
  {
    title: "Relaxed",
    subtitle: "Find Your Outfits",
    description:
      "Confused about your outfit? Don't worry! Find the best outfit here!",
    color: "#BFEAF5",
  },
  {
    title: "Playful",
    subtitle: "Hear it First, Wear it First",
    description:
      "Hating the clothes in your waredrobe? Explore hundreds of outfit ideas",
    color: "#BEECC4",
  },
  {
    title: "Excentric",
    subtitle: "Your Style, Your Way",
    description:
      "Create your individual & unques style and look amazing everyday",
    color: "#FFE4D9",
  },
  {
    title: "Funky",
    subtitle: "Look Good, Feel Good",
    description:
      "Discover the latest trends in fashion and explore your personality",
    color: "#FFDDDD",
  },
];

const Onboarding = () => {
  const scroll = useAnimatedRef();
  const x = useValue(0);
  // TODO: scrollHandler useScrollHandler?
  const onScroll = onScrollEvent({ x });
  const backgroundColor = Animated.interpolateColors(x, {
    inputRange: slides.map((_, i) => i * width),
    outputColorRange: slides.map((slide) => slide.color),
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={1}
          {...{ onScroll }}
        >
          {slides.map(({ title }, index) => (
            <Slide key={index} right={index % 2} {...{ title }} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}
        >
          <Animated.View
            style={[
              styles.footerContent,
              {
                width: width * slides.length,
                flex: 1,
                transform: [{ translateX: multiply(x, -1) }],
              },
            ]}
          >
            {slides.map(({ subtitle, description }, index) => (
              <Subslide
                key={index}
                onPress={() => {
                  if (scroll.current) {
                    scroll.current.scrollTo({
                      x: width * (index + 1),
                      animated: true,
                    });
                  }
                }}
                last={index === slides.length - 1}
                {...{ subtitle, description }}
              />
            ))}
          </Animated.View>
        </Animated.View>
      </View>
    </View>
  );
};

export default Onboarding;
