import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/solid";
import RestaurantCard from "./RestaurantCard";
import sanityClient from "../sanity";

const FeaturedBox = ({ title, description, id }) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'featured' && _id == $id] {
          ...,
          restaurants[]->{
            ...,
            dishes[]->,
            type-> {
              name
            }
          }
      }[0]`,
        { id }
      )
      .then((data) => {
        setRestaurants(data?.restaurants);
      })
      .catch(console.error);
  }, [id]);

  return (
    <View className="py-3">
      <View className="flex-row items-center justify-between">
        <Text className="text-lg font-bold">{title}</Text>
        <ArrowRightIcon size={20} color="black" />
      </View>

      <Text className="text-sm text-gray-500">{description}</Text>

      {restaurants && (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{}}
        >
          {restaurants?.map((restaurant) => (
            <RestaurantCard
              key={restaurant._id}
              id={restaurant._id}
              imgUrl={restaurant?.image}
              title={restaurant?.name}
              rating={restaurant?.rating}
              genre={restaurant?.type?.name}
              address={restaurant?.address}
              short_description={restaurant?.short_description}
              dishes={restaurant?.dishes}
              long={restaurant?.long}
              lat={restaurant?.lat}
            />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default FeaturedBox;
