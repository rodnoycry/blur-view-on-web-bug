import { StyleSheet, View } from "react-native";
import { BlurView } from "expo-blur";

export default function App() {
  return (
    <>
      <BlurView
        style={[
          styles.blur,
          {
            backgroundColor: "#ff0000", // explicitly set background color of BlurView to red
          },
        ]}
      />
      <View style={styles.container}>
        {/* Some stripes to show blur effect better */}
        {[...Array(50)].map((_, i) => (
          <View
            key={i}
            style={[
              styles.stripe,
              { backgroundColor: i % 2 === 0 ? "#fff" : "#99C" },
            ]}
          />
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  blur: {
    position: "absolute",
    top: 100,
    right: 100,
    bottom: 100,
    left: 100,
    zIndex: 100,
    borderRadius: 100,
  },
  stripe: {
    width: 30,
    height: "100%",
  },
});
