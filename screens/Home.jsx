import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "react-native-heroicons/solid";
import Categories from "../components/Categories";
import FeaturedBox from "../components/FeaturedBox";
import sanityClient from "../sanity";

const Home = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      // headerTitle: "Home",
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'featured'] {
          ...,
          restaurants[]->{
            ...,
            dishes[]->,
            type-> {
              name
            }
          }
      }`
      )
      .then((data) => {
        setFeaturedCategories(data);
      })
      .catch(console.error);
  }, []);

  return (
    <SafeAreaView>
      <View className="container px-4">
        {/* header */}
        <View className="flex flex-row items-center space-x-2">
          <Image
            source={{
              uri: "https://avatars.githubusercontent.com/u/60999976?v=4",
            }}
            className="w-8 h-8 rounded-full"
          />

          <View className="flex-1">
            <Text className="text-xs font-bold text-gray-900">
              Deliver Now!
            </Text>
            <Text className="flex flex-row items-center text-xl font-bold">
              Current Location
              <ChevronDownIcon size={20} color="#000" />
            </Text>
          </View>

          <UserIcon size={35} color="black" />
        </View>

        {/* search bar */}
        <View className="flex-row items-center py-2 space-x-2">
          <View className="flex-row flex-1 p-3 space-x-2 bg-gray-200">
            <MagnifyingGlassIcon color="gray" size={20} />
            <TextInput
              placeholder="Restaurants and cuisines"
              keyboardType="default"
            />
          </View>

          <AdjustmentsVerticalIcon size={20} color="black" />
        </View>

        {/* body */}
        <ScrollView
          className="bg-gray-100"
          contentContainerStyle={{
            marginBottom: 100,
            paddingTop: 10,
          }}
        >
          {/* Categories */}
          <Categories />
          {/* featured Box */}
          <>
            {featuredCategories?.map((item) => (
              <FeaturedBox
                key={item?._id}
                id={item?._id}
                title={item?.name}
                description={item?.short_description}
              />
            ))}
          </>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;
