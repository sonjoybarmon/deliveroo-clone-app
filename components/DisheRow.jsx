import { View, Text, TouchableOpacity, Image } from "react-native";
import Currency from "react-currency-formatter";
import React, { useState } from "react";
import { urlFor } from "../sanity";
import { MinusIcon, PlusIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  removeFromBasket,
  selectBasketItems,
  selectBasketItemsWithId,
} from "../features/BasketSlice";

const DisheRow = ({ id, name, description, price, image }) => {
  const [isPress, setIsPress] = useState(false);
  const items = useSelector((state) => selectBasketItemsWithId(state, id));
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    dispatch(
      addToBasket({
        id,
        name,
        description,
        price,
        image,
      })
    );
  };

  const removeItemFromBasket = () => {
    if (items?.length === 0) return;

    dispatch(removeFromBasket({ id }));
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPress(!isPress)}
        className={`py-4  ${isPress ? "" : "border-gray-200 border-y"} `}
      >
        <View className="flex flex-row gap-2">
          <View className="flex-1">
            <Text className="mb-1 text-lg">{name}</Text>
            <Text className="mb-1 text-sm text-gray-500">{description}</Text>
            <Text className="text-sm text-gray-500">
              <Currency quantity={price} currency="USD" />
            </Text>
          </View>

          <View>
            <Image
              source={{ uri: urlFor(image).url() }}
              style={{ resizeMode: "cover" }}
              className="w-24 h-24 overflow-hidden rounded"
            />
          </View>
        </View>
      </TouchableOpacity>

      {/* increment section here */}

      {isPress && (
        <View className="flex flex-row items-center justify-between pb-3 space-x-2 ">
          <View className="flex flex-row items-center space-x-2">
            <TouchableOpacity
              onPress={removeItemFromBasket}
              className="p-1 bg-gray-200 rounded-full"
            >
              <MinusIcon size={20} color="#000" />
            </TouchableOpacity>
            <Text className="text-lg font-bold">{items?.length}</Text>
            <TouchableOpacity
              onPress={addItemToBasket}
              className="p-1 bg-gray-200 rounded-full"
            >
              <PlusIcon size={20} color="#000" />
            </TouchableOpacity>
          </View>

          <View className="flex flex-row items-center space-x-2">
            <Text className="text-lg font-bold">
              <Currency
                quantity={items?.reduce((acc, item) => acc + item.price, 0)}
                currency="USD"
              />
            </Text>
          </View>
        </View>
      )}
    </>
  );
};

export default DisheRow;
