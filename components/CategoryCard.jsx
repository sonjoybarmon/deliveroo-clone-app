import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const CategoryCard = ({ imgUri, title }) => {
  return (
    <TouchableOpacity className="relative mr-2 overflow-hidden rounded">
      <Image
        source={{
          uri: imgUri,
        }}
        className="h-[120px] w-[120px] "
      />

      <View className="absolute top-0 left-0 right-0 bottom-0 bg-[#0000003b] flex items-center justify-end pb-1 ">
        <Text className="text-base font-bold text-white">{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;
