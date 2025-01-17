import React from "react";
import { ImageBackground, View, StyleSheet, Image } from "react-native";
import AppButton from "../components/AppButton";

import AppText from "../components/AppText";
import colors from "../config/colors";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={8}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <AppText>Sell What You Don't Need</AppText>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title="Sign in"
          color={colors.primary}
          onPress={() => navigation.navigate("Login")}
        />
        <AppButton
          title="Sign up"
          color={colors.secondary}
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
  },
});

export default WelcomeScreen;