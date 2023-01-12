import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Switch } from "react-native";
import { ThemeContext } from "./src/context/ThemeContext";
import { myColors } from "./src/style/Color";
import Button from "./src/components/Button";

export default function App() {
  const [theme, setTheme] = useState(`light`);
  return (
    <ThemeContext.Provider value={theme}>
      <View
        style={
          theme === `light`
            ? styles.container
            : [styles.container, { backgroundColor: `#303030` }]
        }
      >
        <Text>salve salve fml</Text>
        <StatusBar style="auto" />
        <Switch
          value={theme === `light`}
          onValueChange={() => setTheme(theme === `light` ? `dark` : `light`)}
        />
        <Button title="hello" onPress={() => {alert(`asdasd`)}} />
      </View>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: "center",
    justifyContent: "center",
  },
});
