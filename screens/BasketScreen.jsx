import { View, Text } from "react-native";
import React, { useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { selectRestaurant } from "../features/restaurantSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectBasketItems } from "../features/BasketSlice";

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
    <View>
      <Text>BasketScreen</Text>
    </View>
  );
};

export default BasketScreen;
