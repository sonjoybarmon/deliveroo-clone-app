import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/solid";
import RestaurantCard from "./RestaurantCard";
import img1 from "../assets/deliver-2.jpeg";
import img2 from "../assets/deliver-3.jpeg";
import img3 from "../assets/deliver-4.jpeg";
import img4 from "../assets/deliver-5.png";
import img5 from "../assets/deliver-6.jpeg";

const FeaturedBox = ({ title, description, id }) => {
  return (
    <View className="py-3">
      <View className="flex-row items-center justify-between">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon size={20} color="black" />
      </View>

      <Text className="text-sm text-gray-500">{description}</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{}}
      >
        <RestaurantCard
          id="1"
          imgUrl={img1}
          title="Restaurant 1"
          rating="4.5"
          genre="Chinese"
          address="123 Main St"
          short_description="This is a short description"
          dishes="Dish 1, Dish 2, Dish 3"
          long="123"
          lat="123"
        />
        <RestaurantCard
          id="1"
          imgUrl={img1}
          title="Restaurant 1"
          rating="4.5"
          genre="Chinese"
          address="123 Main St"
          short_description="This is a short description"
          dishes="Dish 1, Dish 2, Dish 3"
          long="123"
          lat="123"
        />
        <RestaurantCard
          id="1"
          imgUrl={img1}
          title="Restaurant 1"
          rating="4.5"
          genre="Chinese"
          address="123 Main St"
          short_description="This is a short description"
          dishes="Dish 1, Dish 2, Dish 3"
          long="123"
          lat="123"
        />
        <RestaurantCard
          id="1"
          imgUrl={img1}
          title="Restaurant 1"
          rating="4.5"
          genre="Chinese"
          address="123 Main St"
          short_description="This is a short description"
          dishes="Dish 1, Dish 2, Dish 3"
          long="123"
          lat="123"
        />
        <RestaurantCard
          id="1"
          imgUrl={img1}
          title="Restaurant 1"
          rating="4.5"
          genre="Chinese"
          address="123 Main St"
          short_description="This is a short description"
          dishes="Dish 1, Dish 2, Dish 3"
          long="123"
          lat="123"
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedBox;
