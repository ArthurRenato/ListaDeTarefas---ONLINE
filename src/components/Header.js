import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.titulo}>Lista de Tarefas</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 50,
    marginTop: 30,
    marginBottom: 10,
    marginHorizontal: 10,
    borderBottomWidth: 5,
    borderRadius: 10,
    borderColor: "#0c0a09",
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default Header;
