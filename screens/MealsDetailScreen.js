import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import { useDispatch, useSelector } from "react-redux";
//import { FavoritesContext } from "../store/context/favorites-context";

import { addFavorite, removeFavorite } from "../store/redux/favoriteSlice";

function MealsDetailScreen({ route, navigation }) {
  // const favoriteMealsCtx = useContext(FavoritesContext);

  const favouriteMealsIds = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();

  const mealId = route.params.mealId;
  const selectMeal = MEALS.find((meal) => meal.id === mealId);

  //const mealsFavorite = favoriteMealsCtx.ids.includes(mealId);
  const mealsFavorite = favouriteMealsIds.includes(mealId);
  // this line defibe logic that if ids array contains id of this meal
  // if yes then food is favorite , if no means not favorite

  function changeFavoritestatusHandler() {
    if (mealsFavorite) {
      //favoriteMealsCtx.removeFavorite(mealId)
      // use contextAPI to call remove function
      // to remove favorite if mead is favorite selected
      dispatch(removeFavorite({ id: mealId }));

    } else {
      //favoriteMealsCtx.addFavorite(mealId);
      dispatch(addFavorite({ id: mealId }));

    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealsFavorite ? "star" : "star-outline"}
            color="white"
            onPress={changeFavoritestatusHandler}
            // if the meal is favorite by above logic then show start
            // otherwise outline only
          />
        );
      },
    });
  }, [navigation, changeFavoritestatusHandler]);

  // created headerRight with setOptions and here so that
  // button can interect with own element on this
  // page

  return (
    <ScrollView style={styles.rootConatiner}>
      <View>
        <Image source={{ uri: selectMeal.imageUrl }} style={styles.image} />
        <Text style={styles.title}>{selectMeal.title}</Text>
        <MealDetails
          duration={selectMeal.duration}
          complexity={selectMeal.complexity}
          affordability={selectMeal.affordability}
          textStyle={styles.detailText}
        />
        <View style={styles.listOuterContainer}>
          <View style={styles.listContainer}>
            <Subtitle data={selectMeal}>Ingredients</Subtitle>
            <List data={selectMeal.ingredients} />
            <Subtitle>Steps</Subtitle>
            <List data={selectMeal.steps} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default MealsDetailScreen;

const styles = StyleSheet.create({
  rootConatiner: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 220,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "black",
  },

  detailText: {
    color: "black",
  },

  listOuterContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  listContainer: {
    width: "80%",
  },
});
