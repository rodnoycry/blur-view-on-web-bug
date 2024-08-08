import { StyleSheet, View } from "react-native";
import { BlurView } from "expo-blur";

export default function App() {
  return (
    <>
      <BlurView
        style={[
          styles.blur,
          {
            backgroundColor: "#ff000060", // explicitly set background color of BlurView to red
          },
        ]}
        experimentalBlurMethod="dimezisBlurView"
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
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
    zIndex: 100,
    elevation: 100,
    borderRadius: 100,
    overflow: "hidden",
  },
  stripe: {
    width: 30,
    height: "100%",
  },
});
