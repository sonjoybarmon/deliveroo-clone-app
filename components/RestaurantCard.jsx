import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { MapPinIcon, StarIcon } from "react-native-heroicons/solid";
import { urlFor } from "../sanity";

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  return (
    <TouchableOpacity className="mt-4 bg-slate-100 mr-3 border border-solid border-[#0909093d] rounded overflow-hidden">
      <Image
        source={{
          uri: urlFor(imgUrl).url(),
        }}
        className="w-64 overflow-hidden rounded-sm h-36"
      />

      <View className="px-2 pb-2">
        <Text className="pt-2 text-lg font-bold">{title}</Text>

        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-600">{rating} </Text>({genre})
          </Text>
        </View>

        {/* near */}

        <View className="flex-row items-center mt-1 space-x-1">
          <MapPinIcon color="gray" opacity={0.4} size={22} />
          <Text className="text-xs text-gray-500">NearBy - {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
