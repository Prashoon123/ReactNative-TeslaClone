import React from "react";
import { View, FlatList, Dimensions } from "react-native";
import styles from "./styles";
import cars from "./cars";
import CarItem from "../CarItem";

const CarList = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({ item }) => <CarItem car={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={"start"}
        decelerationRate={"normal"}
        snapToInterval={Dimensions.get("window").height}
      />
    </View>
  );
};

export default CarList;
