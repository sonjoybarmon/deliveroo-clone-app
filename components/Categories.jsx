import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

import img1 from "../assets/deliver-2.jpeg";
import img2 from "../assets/deliver-3.jpeg";
import img3 from "../assets/deliver-4.jpeg";
import img4 from "../assets/deliver-5.png";
import img5 from "../assets/deliver-6.jpeg";

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{}}
    >
      <CategoryCard imgUri={img1} title="Title 1" />
      <CategoryCard imgUri={img2} title="Title 2" />
      <CategoryCard imgUri={img3} title="Title 3" />
      <CategoryCard imgUri={img4} title="Title 4" />
      <CategoryCard imgUri={img5} title="Title 1" />
      <CategoryCard imgUri={img3} title="Title 2" />
      <CategoryCard imgUri={img2} title="Title 3" />
      <CategoryCard imgUri={img5} title="Title 4" />
    </ScrollView>
  );
};

export default Categories;
