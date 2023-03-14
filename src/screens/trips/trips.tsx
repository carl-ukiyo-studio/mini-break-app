import React, { useState } from "react";
import {
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from "react-native";

type ItemData = {
  id: string;
  title: string;
};

const DATA: ItemData[] = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

type ItemProps = {
  item: ItemData;
  onPress: () => void;
};

const Item = ({ item, onPress }: ItemProps) => (
  <TouchableOpacity
    onPress={onPress}
    className="p-10 mv-8 mh-16 "
  >
    <Text className="text-xl">{item.title}</Text>
  </TouchableOpacity>
);

const TripsScreen = () => {
  const [selectedId, setSelectedId] = useState<string>();

  const renderItem = ({ item }: { item: ItemData }) => {
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
      />
    );
  };

  return (
    <SafeAreaView className="flex-1">
      <Text className="color-black dark: color-white">My Trips</Text>
     
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
       <TouchableOpacity className="bg-blue-700 p-4 m-2 rounded-md">
        <Text className="color-white text-center">Add Trip</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

// const TripsScreen = () => {
//   return (
//     <View className="flex-1 items-center justify-center bg-white dark: bg-black">
//       <Text className="color-black dark: color-white">My Trips</Text>
//       <Button
//         onPress={() => {
//           // Do something
//         }}
//         title="+ trip"
//         color="#841584"
//         accessibilityLabel="Add a new trip"
//       />
//     </View>
//   );
// };

export default TripsScreen;
