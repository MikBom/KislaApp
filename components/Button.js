import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";

function Button(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Icon name="navicon" style={styles.icon}></Icon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 40
  }
});

export default Button;
