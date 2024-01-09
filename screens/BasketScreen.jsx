import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { selectRestaurant } from "../features/restaurantSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromBasket,
  selectBasketItems,
  selectBasketTotal,
} from "../features/BasketSlice";
import { XCircleIcon } from "react-native-heroicons/solid";
import { urlFor } from "../sanity";
import Currency from "react-currency-formatter";

const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const dispatch = useDispatch();
  const items = useSelector(selectBasketItems);
  const [groupedItemInBasket, setGroupedItemInBasket] = useState([]);

  useMemo(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item?.id] = results[item.id] || []).push(item);
      return results;
    });

    setGroupedItemInBasket(groupedItems);
  }, []);

  console.log(groupedItemInBasket, "groupedItemInBasket");

  return (
    <View className="flex-1 bg-[#f9f9f9]">
      <View className="flex-1">
        <View className="py-5 bg-white border-b border-gray-200 ">
          <View className="">
            <Text className="text-lg font-bold text-center text-black">
              Basket
            </Text>
            <Text className="text-center text-gray-400 ">
              {restaurant?.title}
            </Text>
          </View>

          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute top-3 right-5"
          >
            <XCircleIcon color="#000" size={30} />
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center px-4 py-3 my-5 space-x-4 bg-white">
          <Image
            source={{
              uri: "https://avatars.githubusercontent.com/u/60999976?v=4",
            }}
            className="p-4 bg-gray-300 rounded-full h-7 w-7"
          />

          <Text className="flex-1">Deliver in 50 - 75 min</Text>
          <TouchableOpacity>
            <Text className="text-lg font-bold text-black">Choose Time</Text>
          </TouchableOpacity>
        </View>

        {/* list here */}
        <ScrollView className="divide-y divide-gray-200">
          {Object.entries(groupedItemInBasket).map(([key, items]) => (
            <View
              key={key}
              className="flex flex-row items-center px-5 py-2 space-x-3 bg-white"
            >
              <Text className="text-[#00ccbb] text-xs">{items.length} x</Text>
              {/* <Image
                source={{
                  uri: urlFor(items[0]?.image).url(),
                }}
                className="w-12 h-12 rounded-full"
              /> */}
              <Text className="flex-1 text-black">
                {items[0]?.name || "Foods"}
              </Text>
              <Text className="text-gray-600">
                <Currency quantity={items[0]?.price || 0} currency="USD" />
              </Text>

              <TouchableOpacity
                onPress={() =>
                  dispatch(
                    removeFromBasket({
                      id: key,
                    })
                  )
                }
              >
                <Text className="text-[#00ccbb] text-xs">Remove</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View className="px-10 py-8 mt-5 space-y-4 bg-white">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Subtotal</Text>
            <Text className="text-gray-400">
              <Currency quantity={0} currency="USD" />
            </Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Delivery Fee</Text>
            <Text className="text-gray-400">
              <Currency quantity={0} currency="USD" />
            </Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="">Order Total</Text>
            <Text className="font-extrabold">
              <Currency quantity={0} currency="USD" />
            </Text>
          </View>

          <TouchableOpacity className="rounded-lg bg-[#00ccbb] p-4">
            <Text className="text-lg font-bold text-center text-white">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default BasketScreen;
