import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../sanity";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from "react-native-heroicons/solid";
import DisheRow from "../components/DisheRow";
import BasketIcon from "../components/BasketIcon";
import { useDispatch } from "react-redux";
import { setRestaurant } from "../features/restaurantSlice";

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {
    params: {
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
    },
  } = useRoute();

  useEffect(() => {
    dispatch(
      setRestaurant({
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
      })
    );
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      //   headerTitle: title,
      headerShown: false,
    });
  }, []);

  return (
    <>
      <BasketIcon />
      <ScrollView>
        <View className="relative">
          <Image
            source={{
              uri: urlFor(imgUrl).url(),
            }}
            className="w-full h-56"
          />

          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute p-2 bg-gray-100 rounded-full top-14 left-5"
          >
            <ArrowLeftIcon size={20} color="#000" />
          </TouchableOpacity>
        </View>

        {/*title, rating and location */}
        <View className="px-4 pt-4">
          <Text className="text-3xl font-bold">{title}</Text>

          <View className="flex-row items-center space-x-2">
            <View className="flex-row items-center space-x-1">
              <StarIcon size={22} opacity={0.5} color="green" />
              <Text className="text-xs text-gray-500">
                <Text className="text-green-600">{rating} </Text>({genre})
              </Text>
            </View>
            <View className="flex-row items-center space-x-1">
              <MapPinIcon size={22} opacity={0.4} color="gray" />
              <Text className="text-xs text-gray-500">
                <Text className="text-gray-600">{address} </Text>
              </Text>
            </View>
          </View>

          {/* description */}
          <Text className="pt-2 text-sm text-gray-500">
            {short_description}
          </Text>

          {/* button */}
          <TouchableOpacity className="flex-row items-center py-4 my-3 space-x-2 border-gray-300 border-y">
            <QuestionMarkCircleIcon size={20} opacity={0.6} color="gray" />
            <Text className="flex-1 font-bold text-md">
              Have a food already?
            </Text>
            <ChevronRightIcon color="#00ccbb" size={20} opacity={0.6} />
          </TouchableOpacity>
        </View>

        {/* dishes */}
        <View className="px-4 pb-36">
          <Text className="mb-2 text-xl font-bold">Menu</Text>

          {dishes?.map((dish) => (
            <DisheRow
              key={dish?._id}
              id={dish?._id}
              name={dish?.name}
              description={dish?.short_description}
              price={dish?.price}
              image={dish?.image}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;
