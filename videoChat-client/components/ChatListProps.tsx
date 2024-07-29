import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

interface Chat {
  id: string;
  name: string;
}

interface ChatListProps {
  chats: Chat[];
  onStartChatting: () => void;
}

const ChatList: React.FC<ChatListProps> = ({ chats, onStartChatting }) => {
  return (
    <View style={styles.container}>
      {chats.length > 0 ? (
        <FlatList
          data={chats}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.chatItem}>
              <Text style={styles.chatName}>{item.name}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <View style={styles.noChatsContainer}>
          <Text style={styles.noChatsText}>
            You have no chats. Tap the button below to start chatting with your
            friends.
          </Text>
        </View>
      )}
      <TouchableOpacity style={styles.floatingButton} onPress={onStartChatting}>
        <Text style={styles.floatingButtonText}>
          <Ionicons name="chatbubble-ellipses-sharp" size={24} color="black" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    position: "relative",
  },
  chatItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#111b21",
  },
  chatName: {
    fontSize: 18,
    color: "white",
  },
  noChatsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noChatsText: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
    color: "white",
  },
  startChatButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#111b21",
    borderRadius: 5,
  },
  startChatButtonText: {
    color: "white",
    fontSize: 16,
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

export default ChatList;
