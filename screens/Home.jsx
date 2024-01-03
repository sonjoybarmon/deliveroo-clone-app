import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "react-native-heroicons/solid";
import Categories from "../components/Categories";
import FeaturedBox from "../components/FeaturedBox";

const Home = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      // headerTitle: "Home",
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView>
      <View className="container px-4">
        {/* header */}
        <View className="flex flex-row space-x-2 items-center">
          <Image
            source={{
              uri: "https://avatars.githubusercontent.com/u/60999976?v=4",
            }}
            className="w-8 h-8 rounded-full"
          />

          <View className="flex-1">
            <Text className="font-bold text-gray-900 text-xs">
              Deliver Now!
            </Text>
            <Text className="font-bold text-xl flex flex-row items-center">
              Current Location
              <ChevronDownIcon size={20} color="#000" />
            </Text>
          </View>

          <UserIcon size={35} color="black" />
        </View>

        {/* search bar */}
        <View className="flex-row items-center space-x-2 py-2">
          <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
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
            paddingBottom: 100,
            paddingTop: 10,
          }}
        >
          {/* Categories */}
          <Categories />
          {/* featured Box */}
          <>
            <FeaturedBox
              id="1"
              title="Featured"
              description="Paid Placements from our partners"
            />
            <FeaturedBox
              id="1"
              title="Tasty Discounts"
              description="Paid Placements from our partners"
            />
            <FeaturedBox
              id="1"
              title="Offers near you!"
              description="Paid Placements from our partners"
            />
          </>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;
