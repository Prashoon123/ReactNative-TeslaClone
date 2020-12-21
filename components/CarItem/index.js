import React from "react";
import { ImageBackground, Text, View } from "react-native";
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
    </View>
  );
};

export default CarItem;
