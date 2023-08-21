import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoritesScreen from "./screens/FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealsDetailScreen from "./screens/MealsDetailScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        // contentStyle became sceneConatinerStyle  to change styles
        sceneContainerStyle: {
          backgroundColor: "#3f2f25",
        },
        drawerContentStyle: { backgroundColor: "#351401" },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#351101",
        drawerActiveBackgroundColor: "#e4baa1",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Catrgories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen name="Favorites" component={FavoritesScreen}
      options={{
          title: "All Favorites",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
       />
    </Drawer.Navigator>
  );
}

// function name could be anything and but Drawer.Navigator is important
// we have defined everything here and use the function name
// call it in Stack.Screen

export default function App() {
  return (
    <>
      <GestureHandlerRootView style={styles.container}>
        <StatusBar style="light" />
        <NavigationContainer>
          <Stack.Navigator
          // I can cut and paster screen option (see drawer.navigator) for all the setting
          >
            <Stack.Screen
              name="Drawer"
              //component={CategoriesScreen}
              component={DrawerNavigator}
              // rather than calling a components I called Drawer function and Drawer
              // function has all the components

              options={{
                // title: "All categories",
                headerShown: false,
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

// npm install react-native-safe-area-context@4.6.3 react-native-screens@3.22.0 --save --save-exact
