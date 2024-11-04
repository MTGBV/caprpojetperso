import React from "react";
import { StyleSheet, Text, SafeAreaView, ScrollView } from "react-native";
import Article from "@/components/Article";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemedText } from "@/components/ThemedText";

const Index = () => {
  return (
    <ScrollView>
      <SafeAreaProvider>
        <SafeAreaView style={styles.areahome}>
          <ThemedText type="title" style={styles.title}>
            Home
          </ThemedText>
          <Article title="Stage d’une journée avec les pompiers" />
          <Article title="Témoignage d’incendie ce samedi" />
          <Article title="Stage d’une journée avec les pompiers" />
          <Article title="Stage d’une journée avec les pompiers" />
          <Article title="Stage d’une journée avec les pompiers" />
        </SafeAreaView>
      </SafeAreaProvider>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  areahome: {
    flex: 1,
    margin: 25,
  },
  title: {
    color: "#000000",
    marginVertical: 25,
  },

  text: {
    fontSize: 25,
    fontWeight: "500",
  },
});

export default Index;
