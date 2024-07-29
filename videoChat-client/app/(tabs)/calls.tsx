import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export default function CallsScreen() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const dropdownOptions = ["Option 1", "Option 2", "Option 3"];

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Calls</Text>

        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <MaterialIcons name="camera-alt" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={toggleDropdown}
            style={styles.dropdownToggle}
          >
            <MaterialIcons name="more-vert" size={24} color="white" />
            {dropdownVisible && (
              <View style={styles.dropdownMenu}>
                <FlatList
                  data={dropdownOptions}
                  renderItem={({ item }) => (
                    <TouchableOpacity style={styles.dropdownItem}>
                      <Text style={styles.dropdownItemText}>{item}</Text>
                    </TouchableOpacity>
                  )}
                  keyExtractor={(item) => item}
                />
              </View>
            )}
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.noContentText}>
          You have no calls. Make new calls by tapping the button below.
        </Text>
      </View>

      <TouchableOpacity style={styles.floatingButton}>
        <FontAwesome6 name="phone" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111b21",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 25,
    backgroundColor: "#111b21",
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginTop: 10,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    marginTop: 10,
  },
  dropdownToggle: {
    position: "relative",
  },
  dropdownMenu: {
    position: "absolute",
    right: 0,
    top: 30,
    backgroundColor: "white",
    borderRadius: 8,
    elevation: 5,
    paddingVertical: 8,
    width: 120,
  },
  dropdownItem: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  dropdownItemText: {
    fontSize: 16,
    color: "black",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noContentText: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
  },
  floatingButton: {
    position: "absolute",
    bottom: 16,
    right: 16,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#2c9c3a",
    justifyContent: "center",
    alignItems: "center",
    elevation: 8,
  },
  floatingButtonText: {
    color: "white",
    fontSize: 24,
  },
});
