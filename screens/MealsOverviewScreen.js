import { useLayoutEffect } from "react";
import { View, StyleSheet } from "react-native";

import { MEALS, CATEGORIES } from "../data/dummy-data";

import { FlatList } from "react-native";
import MealItem from "../components/MealItem";

function MealsOverviewScreen({ route, navigation }) {
  const mealsId = route.params.categoryId;
  //const route = useRoute();

  const displayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(mealsId) >= 0;
  });

  // here we can set OPTIONS also by destructuring Navigation
  // navigation.setOptions({
  //  set title and other things like App page
  //})
  // indexOf returns -1 to false so the above condition

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === mealsId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [mealsId, navigation]);

  function renderMealItem(itemData) {
    const item = itemData.item;
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };
    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

// we can use useRoute hook to get Id
// const route = useRoute()
//route.params
