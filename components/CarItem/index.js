import React from "react";
import { ImageBackground, Text, View } from "react-native";
import StyledButton from "../StyledButton";
import styles from "./styles";

const CarItem = ({ image, title, subtitle }) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets/images/ModelS.jpeg")}
        style={styles.image}
      />

      <View style={styles.titles}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>

      <StyledButton
        type="primary"
        text="CUSTOM ORDER"
        onPress={() => {
          console.warn("Custom Order was pressed.");
        }}
      />
      <StyledButton
        type="secondary"
        text="EXISTING INVENTORY"
        onPress={() => {
          console.warn("Existing Inventory was pressed.");
        }}
      />
    </View>
  );
};

export default CarItem;
