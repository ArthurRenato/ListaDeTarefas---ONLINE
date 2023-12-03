import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Tarefa = ({ titulo, conteudo, id, apagarTarefa }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titulo}>
        <Text>{titulo}</Text>
      </View>

      <View style={styles.conteudo}>
        <Text>{conteudo}</Text>
      </View>

      <TouchableOpacity style={styles.btn} onPress={() => apagarTarefa(id)}>
        <AntDesign name="delete" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: "#292524",
    borderRadius: 10,
    marginVertical: 3,
  },
  btn: {
    borderRadius: 10,
    height: 30,
    alignSelf: "flex-end",
  },
  titulo: {
    borderBottomWidth: 1,
    marginHorizontal: 5,
  },
  conteudo: {
    marginHorizontal: 5,
  },
});

export default Tarefa;
