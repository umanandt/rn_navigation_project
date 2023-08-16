import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealsDetailScreen from "./screens/MealsDetailScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <GestureHandlerRootView style={styles.container}>
        <StatusBar style="light" />
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#351401" },
              headerTintColor: "white",
              contentStyle: {
                backgroundColor: "#3f2f25",
              },
            }}
          >
            <Stack.Screen
              name="MealsCategories"
              component={CategoriesScreen}
              options={{
                title: "All categories",
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
              // options= {({ route, navigation }) => {
              //   const catId = route.params.categoryId;
              //   return {
              //     title: catId,
              // }
              // }} we can do all here another of setting "OPTIONS"
            />

            <Stack.Screen
              name="MealsDetailScreen"
              component={MealsDetailScreen}
              //  options={{
              //  headerRight: () => {
              //    return <Button title="Tap Me!" onPress={}/>;
              //  },
              // }}
              // if don't need direct interection from screen component
              // then this method will work by using options and creating
              // header right and including button
            />
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

// navigators implent different navigation behaviours
// there are actually dependencies that need to be installed

// stack.scrren add screen that will mange by navigator
// npm install @react-navigation/native
// npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

//<Stack.Navigator initialRouteName="ProductDetails">
//<Stack.Screen name="AllProducts" component={AllProducts} />
//<Stack.Screen name="ProductDetails" component={ProductDetails} /> // initial screen
//</Stack.Navigator>
//
