import { View, Text, StyleSheet } from "react-native";
import MealsList from "../components/MealsList/MealsList";
//import { useContext } from "react";
//import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";

function FavoritesScreen() {
  //const favoriteCtxData = useContext(FavoritesContext);

  const myFavMeals = useSelector((state) => state.favoriteMeals.ids);

  const favoriteFood = MEALS.filter((meal) =>
    // favoriteCtxData.ids.includes(meal.id)
    myFavMeals.includes(meal.id)
  );

  if (favoriteFood.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}> You have no favorite meals yet. </Text>
      </View>
    );
  }

  return <MealsList items={favoriteFood} />;
}
export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
