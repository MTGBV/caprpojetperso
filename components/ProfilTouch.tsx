import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export type ProfilTouchType = "normal" | "destructive";

interface ProfilTouchProps {
  title: string;
  type?: ProfilTouchType;
  icon?: keyof typeof Ionicons.glyphMap;
  onPress?: () => void; // Ajout de la prop onPress
}

const ProfilTouch: React.FC<ProfilTouchProps> = ({
  title,
  type = "normal",
  icon,
  onPress, // Ajout de onPress ici
}) => {
  return (
    <View
      style={[styles.viewarea, type === "destructive" && styles.destructive]}
    >
      <TouchableOpacity onPress={onPress}> {/* Utilisation de onPress */}
        <Text style={styles.row}>
          {icon && (
            <Ionicons
              name={icon}
              size={20}
              color={type === "destructive" ? "#FFFFFF" : "#505050"}
              style={styles.icon}
            />
          )}
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfilTouch;

const styles = StyleSheet.create({
  viewarea: {
    marginVertical: 0.5,
    borderRadius: 5,
    borderColor: "#D7D7D7",
    backgroundColor:'#EFEFEF',
    borderWidth: 1,
    padding: 15,
  },
  destructive: {
    borderColor: "#FF0000",
    backgroundColor: "#FF0000",
  },
  icon: {
    marginRight: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
});
