import { View, Text, StyleSheet } from "react-native";

function Subtitle({ children }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    margin: 6,
    textAlign: "center",
  },

  subtitleContainer: {
    padding: 6,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
    marginHorizontal: 24,
    marginVertical: 4,
  },
});
