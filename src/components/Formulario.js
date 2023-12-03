import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

const Formulario = ({ tarefas, criarTarefa }) => {
  const [titulo, setTitulo] = useState("");
  const [conteudo, setConteudo] = useState("");

  const handleAdicionar = () => {
    // Atualiza o estado das tarefas adicionando a nova tarefa ao array existente
    if (titulo !== "" && conteudo !== "") {
      criarTarefa(titulo, conteudo);
    }

    // Limpa os campos após adicionar
    setTitulo("");
    setConteudo("");
  };

  return (
    <View style={styles.container}>
      <View>
        <Text>Titulo:</Text>
        <TextInput
          style={styles.input}
          value={titulo}
          onChangeText={(texto) => setTitulo(texto)}
        />
      </View>

      <View>
        <Text>Conteudo:</Text>
        <TextInput
          style={styles.input}
          value={conteudo}
          onChangeText={(texto) => setConteudo(texto)}
        />
      </View>

      <TouchableOpacity style={styles.btn} onPress={handleAdicionar}>
        <Text style={styles.textBtn}>ADICIONAR</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 5,
    borderColor: "#1c1917",
    borderRadius: 10,
    marginHorizontal: 10,
    padding: 10,
  },
  btn: {
    backgroundColor: "#1c1917",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    height: 30,
    marginTop: 10,
  },
  textBtn: {
    color: "#fafaf9",
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default Formulario;
