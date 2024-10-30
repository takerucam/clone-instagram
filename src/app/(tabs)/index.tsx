import { View, FlatList } from "react-native";
import posts from "~/assets/data/posts.json";
import PostListItem from "~/src/components/PostListItem";

export default function FeedScreen() {
  return (
    <View className="bg-white">
      <FlatList
        data={posts}
        contentContainerStyle={{ gap: 10 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <PostListItem post={item} />}
      />
    </View>
  );
}
