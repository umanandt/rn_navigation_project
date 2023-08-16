import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { useLayoutEffect } from "react";
import IconButton from "../components/IconButton";

function MealsDetailScreen({ route, navigation }) {
  const mealId = route.params.mealId;
  const selectMeal = MEALS.find((meal) => meal.id === mealId);

  function headerRightButton() {
    console.log("Pressed!");
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton icon="star" color="white" onPress={headerRightButton} />
        );
      },
    });
  }, [navigation, headerRightButton]);

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
            <Subtitle data={selectMeal}></Subtitle>
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
    color: "white",
  },

  detailText: {
    color: "white",
  },

  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
