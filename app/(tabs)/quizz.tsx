import React from "react";
import { StyleSheet, Text, SafeAreaView, ScrollView, View } from "react-native";

const Quizz = () => {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Quizz Page</Text>
        <View style={styles.imagequizz}>
          <Text>IMAGE</Text>
        </View>

        <View>
          <View style={styles.questionquizz}>
            <Text>Quel geste aide à prévenir les feux de forêt ? </Text>
          </View>

          <View style={styles.containerpropo}>
            <View style={styles.propositions}>
              <Text>A. Ne pas allumer de feu 
              en période de sécheresse</Text>
            </View>
            <View style={styles.propositions}>
              <Text>B. Jeter les mégots 
              dans la forêt</Text>
            </View>
            <View style={styles.propositions}>
              <Text>C. Utiliser des 
              barbecues en été</Text>
            </View>
            <View style={styles.propositions}>
              <Text>D. Ne rien ramasser</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imagequizz:{
    backgroundColor:"#E9EAEC",
    height: 200,
    margin:15,
    borderRadius:20,
    marginBottom:30,
  },
  text: {
    fontSize: 25,
    fontWeight: "500",
  },
  questionquizz:{
    alignItems: 'center',
    backgroundColor:"#E9EAEC",
    marginHorizontal:15,
    marginBottom:10,
    padding:20,
    borderRadius:20
  },
  containerpropo:{
    flex:1,
    flexWrap:'wrap',
    flexDirection: 'row',

    justifyContent:'space-around'
  },
  propositions: {
    padding:20,
    borderRadius:20,
    width: '45%',
    height:100,
    marginVertical:8,
    backgroundColor:'#E9EAEC',
    alignItems: 'center',
  }
});

export default Quizz;
