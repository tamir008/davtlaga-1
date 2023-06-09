import { View, Text, SafeAreaView, StyleSheet, Platform, StatusBar, Image, ScrollView } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons, Entypo } from 'react-native-vector-icons';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.view1}>
          <Text style={styles.tex}>Өдрийн мэнд</Text>
          <MaterialCommunityIcons name="ticket-percent" style={styles.icon1} />
          <Image source={require("./assets/download.png")} style={styles.img1} />
        </View>
        <View style={styles.view2}>
          <View style={styles.box1}><Text style={styles.boxtxt}>Товч ном</Text>      
            <Entypo name="triangle-right" style={styles.boxtxt}></Entypo>
          </View>
          <View style={styles.box2}><Text style={styles.boxtxt}>Цахим ном</Text></View>
          <View style={styles.box3}><Text style={styles.boxtxt}>Аудио ном</Text></View>
          <View style={styles.box4}><Text style={styles.boxtxt}>Подкаст</Text></View>   

        </View>
        <View style={styles.view3}>
          <Text style={styles.txt2}>Далайн зохиол</Text>
          <Text style={styles.txt3}>Энэ 7 хоногийн онцлох</Text>
          <Image source={require('./assets/download.png')} style={styles.image} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dcdcdc",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  view1: {
    height: 50,
    borderWidth: 1,
    alignItems: "center",
    flexDirection: 'row',
  },
  tex: {
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 20,
  },
  icon1: {
    fontSize: 35,
    marginLeft: 100,
  },
  img1: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginLeft: 10,
  },
  view2: {
    height: 250,
    backgroundColor: "White",
    borderRadius: 20,
    flexDirection: 'row',
    flexwrap: "wrap",
    justifyContent: 'center',
    alignItems: 'center'

  },
  box1: {
    width: 80,
    height: 90,
    backgroundColor: "aqua",
    borderRadius: 20,
    margin: 10,
  },
  box2: {
    width: 150,
    height: 50,
    backgroundColor: "orange",
    borderRadius: 20,
    margin: 10,
  },
  box3: {
    width: 150,
    height: 90,
    backgroundColor: "yellow",
    borderRadius: 20,
    margin: 10,
  },
  box4: {
    width: 150,
    height: 70,
    backgroundColor: "violet",
    borderRadius: 20,
    margin: 10,

  },
  boxtxt: {
    fontSize: 20,
    fontWeight: 700,
    margin: 10,
  },
  boxicon: {
    fontSize: 35,
  },
  view3: {
    weidth: 350,
    height: 700,
    backgroundColor: 'White',
    borderRadius: 20,
    margin: 14,
    backgroundColor: 'white',
    overflow: 'hidden'
  },
  txt2: {
    fontSize: 15,
    color: 'gray',
    textTransform: 'uppercase',
  },
  txt3: {
    fontSize: 35,
    fontWeight: 'hold',
    marginLeft: 20,
  },
  image: {
    resizeMode: "stretch",
    flex: 1,
    width: "100%",
  },
})

