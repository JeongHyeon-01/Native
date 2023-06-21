import React from "react";

import {
  Text,
  Image,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";

export default ({ image, selected, name, enName, setViewShorts }) => {
  const { width } = useWindowDimensions();
  return (
    <TouchableOpacity
      style={{
        width: width / 4,
        height: width / 4,
        flex: 1,
        backgroundColor: selected
          ? "rgba(255,255,255,0.9)"
          : "rgba(255,255,255,0.4)",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        borderWidth: 0.5,
        borderColor: selected ? "rgba(0,0,0,0.3)" : "rgba(255,255,255,1)",
        zIndex: 10,
        marginHorizontal: 5,
      }}
      onPress={
        selected
          ? () => {
              setViewShorts(true);
            }
          : null
      }
    >
      <Image
        source={{
          uri: image,
        }}
        style={{
          width: width / 10,
          height: width / 10,
          resizeMode: "contain",
        }}
      />
      <Text
        style={{
          fontSize: 14,
        }}
      >
        {name}
      </Text>
      <Text
        style={{
          fontSize: 12,
          color: "rgba(0,0,0,0.3)",
        }}
      >
        {enName}
      </Text>
    </TouchableOpacity>
  );
};