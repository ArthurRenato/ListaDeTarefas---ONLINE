import React from "react";
import { FlatList, StyleSheet } from "react-native";
import Tarefa from "./Tarefa";

const ListaTarefas = ({ tarefas, apagarTarefa }) => {
  return (
    <FlatList
      style={styles.container}
      data={tarefas}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Tarefa
          titulo={item.titulo}
          conteudo={item.conteudo}
          id={item.id}
          apagarTarefa={apagarTarefa}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
});

export default ListaTarefas;
