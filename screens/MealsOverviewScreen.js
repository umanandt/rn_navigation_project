import { useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";
import { MEALS, CATEGORIES } from "../data/dummy-data";



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


  return <MealsList  items = {displayMeals}/>
}

export default MealsOverviewScreen;



// we can use useRoute hook to get Id
// const route = useRoute()
//route.params
