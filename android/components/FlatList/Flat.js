import React, { Component } from 'react'
import { FlatList, Text, View , Image} from 'react-native'

const Data = [
  { title: "BD", subtitle: "Country" },
  { title: "US", subtitle: "Country" },
  { title: "CN", subtitle: "Country" },
  { title: "PK", subtitle: "Country" },
]


const Item = ({ title, subtitle }) => (

  <View style={{ backgroundColor: "gray",borderRadius: 10, flexDirection: "row",}}>
     <View style={{flex: 30, marginBottom: 25}}>
         <Image style={{height: 100, width: "100%", objectFit: "cover" }} source= {{uri: "https://avatars.githubusercontent.com/u/95497010?v=4"}} />
     </View>
     <View style={{flex: 70 , marginHorizontal: 50}}>
        <Text>{title}</Text>
        <Text>{subtitle}gg</Text>
   </View>
  </View>
)


const Flat = () => {
  return (
    <View>
      <FlatList
        data={Data}
        renderItem={({ item }) => <Item title={item.title} subtitle={item.subtitle} />}
        keyExtractor={item => item.title}
      >
      </FlatList>
    </View>
  )
}

export default Flat