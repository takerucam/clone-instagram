import { useState } from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";

export default function CreatePost() {
  const [caption, setCaption] = useState("");

  return (
    <View className="p-3 items-center flex-1">
      <Image
        source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg",
        }}
        className="w-52 aspect-[3/4] rounded-lg"
      />

      <Text
        className="text-blue-500 font-semibold m-5"
        onPress={() => {
          console.log("Text pressed");
        }}
      >
        Change
      </Text>

      <TextInput
        value={caption}
        placeholder="What is on your mind"
        className="bg-white w-full p-3"
        onChangeText={(newValue) => setCaption(newValue)}
      />

      <View className="mt-auto w-full">
        <Pressable className="bg-blue-500 w-full p-3 items-center rounded-md">
          <Text className="text-white font-semibold">Share</Text>
        </Pressable>
      </View>
    </View>
  );
}
