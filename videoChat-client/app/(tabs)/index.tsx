import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
  FlatList,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import ChatList from "../../components/ChatListProps";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [chats, setChats] = useState<{ id: string; name: string }[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleCameraPress = async () => {
    if (hasPermission === null) {
      Alert.alert("Permission not yet determined");
      return;
    }

    if (hasPermission === false) {
      Alert.alert("No access to camera");
      return;
    }

    try {
      // Open camera
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (result.assets && result.assets.length > 0) {
        const image = result.assets[0];
        console.log(image.uri);
      } else {
        console.log("No image selected");
      }
    } catch (error) {
      console.error("Error opening camera:", error);
    }
  };

  const dropdownOptions = ["Option 1", "Option 2", "Option 3"];

  const handleStartChatting = () => {
    navigation.navigate("explore");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Chirps</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={handleCameraPress}>
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
      <ChatList chats={chats} onStartChatting={handleStartChatting} />
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
});
