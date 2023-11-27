import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, View, Linking, Image } from "react-native";
import Background from "../../../components/Background";
import Header from "../../../components/Header";
import Button from "../../../components/Button";
import TextInput from "../../../components/TextInput";
import { theme } from "../../../core/theme";

export default function LoginScreen({ navigation }) {
  const onLoginPressed = () => {
    navigation.navigate("NavigatorMhs");
  };

  return (
    <Background>
      <Image source={require("../../../assets/img/logo-siap-v12.png")} resizeMode="contain"  style={{ width: 300, height: 100 }} />
      <Header>Login</Header>
      <Button mode="contained" onPress={onLoginPressed}>
          LOGIN VIA SSO
      </Button>
    </Background>
  );
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 24,
  },
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary,
  },
});
