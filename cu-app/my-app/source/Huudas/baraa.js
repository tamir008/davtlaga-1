import { StyleSheet, View, StatusBar, SafeAreaView, Text, ImageBackground, Image, ScrollView, localImage } from 'react-native';
import { MaterialCommunityIcons, Ionicons, EvilIcons, Entypo, MaterialIcons, Octicons, Feather, AntDesign, } from '@expo/vector-icons';
//https://cdn.zochil.shop/zochil.mn/cover.png
export default function App({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <View style={styles.sag}>
                    <Feather style={{ fontSize: 30, marginLeft: 10, }} name="list" />
                    <View style={styles.haih}>
                        <Text style={styles.a1}>Хайх</Text>
                    </View>
                    <AntDesign style={{ fontSize: 30, }} name='search1' />
                    <Ionicons style={{ fontSize: 30, }} name='notifications-outline' />
                </View>
            </View>
            <ScrollView>
            <View style={styles.one}>
                <View style={styles.milk}>
                    <Image style={styles.choco}
                        source={require('../Huudas/zurag.jpg')}
                    />
                    <Text style={styles.b1} >Шоколад milky Way </Text>
                    <Text style={styles.b2}>1500₮</Text>
                </View>
                <View style={styles.mandm}>
                    <Image style={styles.choco}
                        source={require('../Huudas/sss.jpg')}
                    />
                    <Text style={styles.b1} >M&M Choco 125g </Text>
                    <Text style={styles.b2}>7500₮</Text>
                </View>
            </View>
            <View style={styles.one}>
                <View style={styles.milk}>
                    <Image style={styles.choco}
                        source={require('../Huudas/yellow.jpg')}
                    />
                    <Text style={styles.b1} >M&M Choco 82g </Text>
                    <Text style={styles.b2}>5600₮</Text>
                </View>
                <View style={styles.milk}>
                    <Image style={styles.choco}
                        source={require('../Huudas/sikers.jpg')}
                    />
                    <Text style={styles.b1} >Snikers 75g </Text>
                    <Text style={styles.b2}>4000₮</Text>
                </View>
            </View>
            <View style={styles.one}>
                <View style={styles.milk}>
                    <Image style={styles.choco}
                        source={require('../Huudas/jijig.jpg')}
                    />
                    <Text style={styles.b1} >Snikers 50g </Text>
                    <Text style={styles.b2}>6000₮</Text>
                </View>
                <View style={styles.milk}>
                    <Image style={styles.choco}
                        source={require('../Huudas/twix.jpg')}
                    />
                    <Text style={styles.b1} >Шоколад Twix 65g</Text>
                    <Text style={styles.b2}>2400₮</Text>
                </View>
            </View>
            <View style={styles.one}>
                <View style={styles.milk}>
                    <Image style={styles.choco}
                        source={require('../Huudas/mars.jpg')}
                    />
                    <Text style={styles.b1} >Шоколад Mars 50g </Text>
                    <Text style={styles.b2}>2400₮</Text>
                </View>
                <View style={styles.milk}>
                    <Image style={styles.choco}
                        source={require('../Huudas/skitt.jpg')}
                    />
                    <Text style={styles.b1} >Шоколад skitt 250g </Text>
                    <Text style={styles.b2}>3800₮</Text>
                </View>
            </View>
            <View style={styles.one}>
                <View style={styles.milk}>
                    <Image style={styles.choco}
                        source={require('../Huudas/nest.jpg')}
                    />
                    <Text style={styles.b1} >Шоколад nestle 110g </Text>
                    <Text style={styles.b2}>3400₮</Text>
                </View>
                <View style={styles.milk}>
                    <Image style={styles.choco}
                        source={require('../Huudas/bon.jpg')}
                    />
                    <Text style={styles.b1} >Шоколад Bon Bon 500g </Text>
                    <Text style={styles.b2}>7800₮</Text>
                </View>
            </View>
            </ScrollView>
        </SafeAreaView >


    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,

    },
    sag: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:10,
    },
    haih: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#D7DBDD',
        height: 40,
        width: 200,
        borderRadius: 10,
    },
    a1: {
        marginLeft: 10,
        marginTop: 5,
    },
    milk: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#D7DBDD',
        height: 200,
        width: 190,
        marginLeft: 10,
        borderRadius: 20,
        marginTop: 20,
    },
    choco: {
        width: '100%',
        height: 100,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
    },
    b1: {
        marginTop: 10,
        margin: 10,
    },
    one:{
   flexDirection:'row',
    },
    mandm:{
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#D7DBDD',
        height: 200,
        width: 190,
        marginLeft: 10,
        borderRadius: 20,
        marginTop: 20,
    },
    b2:{
        fontWeight:'500',
        marginLeft:10,
    },
},


)




