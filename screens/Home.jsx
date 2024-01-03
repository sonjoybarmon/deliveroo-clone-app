import { View, Text, SafeAreaView, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

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

          <View>
            <Text className="font-bold text-gray-900 text-xs">
              Deliver Now!
            </Text>
            <Text className="font-bold text-xl">Current Location</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
