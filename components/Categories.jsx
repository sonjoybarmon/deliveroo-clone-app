import { ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import sanityClient, { urlFor } from "../sanity";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'menu']
        `
      )
      .then((data) => {
        setCategories(data);
      })
      .catch(console.error);
  }, []);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{}}
    >
      {categories?.map((menu) => (
        <CategoryCard
          key={menu?._id}
          imgUri={urlFor(menu?.image).width(200).url()}
          title={menu?.name}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;
