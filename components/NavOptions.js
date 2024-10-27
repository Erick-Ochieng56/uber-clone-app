import { StyleSheet, Text, View, FlatList} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native';

const data = [
    {
        id:"123",
        title: "Get a ride",
        Image: "https://links.papareact.com/3pn",
        screen: "MapScreen",
    },
    {
        id: "456",
        title: "Order food",
        image: "https://links.papareact.com/28w",
        screen: "EatsScreen",
    },
];




const NavOptions = () => {
  return (
    <View>
      <FlatList
      data={data}

      keyExtractor={(item) => item.id}
      
      renderItem={({ item }) =>(
        <TouchableOpacity>
            <Text>{item.title}</Text>
        </TouchableOpacity>

      )}
      />
    </View>
  )
}

export default NavOptions

const styles = StyleSheet.create({})