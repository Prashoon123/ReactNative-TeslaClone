import React from "react";
import { ImageBackground, Text, View } from "react-native";
import StyledButton from "../StyledButton";
import styles from "./styles";

const CarItem = ({ image, title, subtitle, subtitleCTA }) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />

      <View style={styles.titles}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>
          {subtitle}
          <Text style={styles.subtitleCTA}>{subtitleCTA}</Text>
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
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
    </View>
  );
};

export default CarItem;
