import { Text, View, Image, TextInput } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import Button from "~/src/components/Button";

export default function ProfileScreen() {
  const [image, setImage] = useState<string | null>(null);
  const [username, setUsername] = useState<string>("");

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View className="p-2 flex-1">
      {image ? (
        <Image
          source={{
            uri: image,
          }}
          className="w-52 aspect-square rounded-full self-center"
        />
      ) : (
        <View className="w-52 aspect-square rounded-full bg-slate-300 self-center" />
      )}
      <Text
        className="text-blue-500 font-semibold m-5 self-center"
        onPress={pickImage}
      >
        Change
      </Text>

      <Text className="mb-2 text-gray-500 font-semibold">Username</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        className="border border-gray-300 p-2 rounded-md"
      />

      <View className="gap-3 mt-auto">
        <Button title="Update Profile" />
        <Button title="Sign out" />
      </View>
    </View>
  );
}
