import { StyleSheet, View, StatusBar, SafeAreaView, Text, ImageBackground, Image, ScrollView, localImage, Pressable } from 'react-native';
import { MaterialCommunityIcons, Ionicons, EvilIcons, Entypo, MaterialIcons, Octicons, Feather, AntDesign, } from '@expo/vector-icons';
//https://cdn.zochil.shop/zochil.mn/cover.png
export default function App({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <View style={styles.cuv1}>
                    <Ionicons style={styles.icon1} name="list" />
                    <Text style={styles.tex}>297 </Text>
                    <EvilIcons style={{ fontSize: 35, marginBottom: 5, marginRight: 10 }} name='sc-pinterest' />
                    <View style={styles.icon2}>
                        <Ionicons style={{ fontSize: 30 }} name="search" />
                    </View>
                    <Entypo style={{ fontSize: 30, marginLeft: 10 }} name="bell" />
                </View>
                    <View style={styles.cuuu}>
  <ScrollView>
    <Image
      style={styles.tinyLogo}
      source={require('../cu_logo.jpg')}
    />
  
  </ScrollView>
</View>
 
            </View>
            <View style={styles.su}>
                <View style={styles.cu2}>
                    <Text style={styles.t1}>Check-in урамшуулал</Text>
                    <Text style={styles.t2}>1-р шат</Text>
                </View>
                <View style={styles.ognoo}>
                    <View>
                        <Text style={{ fontSize: 20 }}>Кофе американо</Text>
                        <Text>Дуусах огноо:2023-10-23</Text>
                    </View>
                    <View style={styles.as}>
                        <Image style={styles.asuult} source={require('./download.png')} />
                        <Image style={styles.cofe} source={require('..//images.png')} />
                    </View>
                </View>
                <View style={styles.ddone}>
                    <MaterialIcons style={styles.done} name='done' />
                    <Octicons style={styles.sash} name='dash' />
                    <MaterialIcons style={styles.done} name='done' />
                    <Octicons style={styles.sash} name='dash' />
                    <Octicons style={styles.sash} name='dash' />
                    <MaterialIcons style={styles.done} name='done' />
                    <Octicons style={styles.sash} name='dash' />
                    <Octicons style={styles.sash} name='dash' />
                    <MaterialIcons style={styles.done} name='done' />
                    <Octicons style={styles.sash} name='dash' />
                    <Octicons style={styles.sash} name='dash' />
                    <MaterialIcons style={styles.done} name='done' />
                    <Octicons style={styles.sash} name='dash' />
                    <MaterialIcons style={styles.done} name='done' />
                </View>
                <View style={styles.texttt}>
                    <Text>Та 10,000$-өөс дээш худалдан авалт бүртээ CU апаа уншуулж, тамга цуглуулан бүтээгдэхүүн бэлгэнд аваарай
                    </Text>
                </View>
            </View>
            <View>
                <View style={styles.sud}>
                    <Text style={{ fontSize: 20 }}>Судалгаа</Text>
                    <View style={styles.arrow}>
                        <MaterialIcons style={{ fontSize: 30 }} name='keyboard-arrow-right' />
                    </View>
                </View>
            </View>
            <View>
                <View>
                    <View style={styles.hud}>
                        <Text style={{ fontSize: 20 }}>CU-гээс санал болгох</Text>
                        <View style={styles.arrow}>
                            <MaterialIcons style={{ fontSize: 30 }} name='keyboard-arrow-right' />
                        </View>
                    </View>
                </View>
                <View style={styles.ad} >
                    <Feather style={{ fontSize: 30 }} name='coffee' />
                    <MaterialCommunityIcons style={{ fontSize: 30, marginLeft: 10, }} name='cupcake' />
                    <Ionicons style={{ fontSize: 30, marginLeft: 30, }} name='md-fast-food-outline' />
                    <MaterialCommunityIcons style={{ fontSize: 30, marginLeft: 10, }} name='cup-water' />
                    <MaterialCommunityIcons style={{ fontSize: 30 }} name='bottle-soda-classic-outline' />
                </View>
                <View />
            </View>
            <View style={styles.af}>
                <Text>Кофе</Text>
                <Text>Амттан</Text>
                <Text>Түргэн хоол</Text>
                <Text>Ус</Text>
                <Text>Ундаа</Text>
            </View>
            <View style={styles.ag} >
                <AntDesign style={{ fontSize: 30, }} name='home' />
                <Pressable onPress={() => navigation.navigate('Baraa')} >
                    <Feather style={{ fontSize: 30 }} name='archive' />
                </Pressable>
                <AntDesign style={{ fontSize: 30, marginRight: 10, }} name='qrcode' />
                <AntDesign style={{ fontSize: 30, }} name='tago' />
                <AntDesign style={{ fontSize: 30, marginRight: 10, }} name='profile' />
            </View>
            <View style={styles.uges} >
                <Text>Нүүр</Text>
                <Text>Бараа</Text>
                <Text>QR</Text>
                <Text>Купон</Text>
                <Text>Миний</Text>
            </View>

        </SafeAreaView >


    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,

    },
    tinyLogo: {
        width: '100%',
        height: 250,
    },
    icon1: {
        fontSize: 35,
        alignItems: "center",
        flexDirection: 'row',
        marginLeft: 30,

    },
    cuv1: {
        flexDirection: 'row',
        fontWeight: "bold",
        // gap: 20,
        alignItems: "center",
        // marginBottom: 100,
    },
    tex: {
        fontSize: 21,
        marginLeft: 10,
    },
    icon2: {
        marginLeft: 170,
    },
    asuult: {
        width: 20,
        height: 35,
        borderRadius: 50,
    },
    cu2: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginLeft: 20,
        alignItems: 'center',
    },
    ognoo: {
        fontSize: 30,
        marginLeft: 20,
        flexDirection: "row",
        justifyContent: 'center',
        gap: 90,
    },
    cofe: {
        width: 35,
        height: 70,
        marginTop: 10,
        alignItems: 'center',
    },
    cuv3: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    as: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginRight: 20,
    },
    su: {
        backgroundColor: '#f8f8ff',
        borderWidth: 1,
        borderColor: '#D7DBDD',
        height: 250,
        width: 380,
        marginLeft: 15,
        borderRadius: 20,
        marginTop: 20,
    },
    t2: {
        marginRight: 20,
    },
    done: {
        fontSize: 30,
        borderWidth: 1,
        width: 30,
        height: 30,
        alignItems: 'center',
        borderRadius: 30,
        justifyContent: 'center',
        backgroundColor: '#D7DBDD',
    },
    ddone: {
        flexDirection: 'row',
        marginLeft: 10,
    },
    sash: {
        fontSize: 30,
    },
    texttt: {
        alignItems: 'center',
        paddingTop: 8,
        backgroundColor: '#FEF5E7',
        marginTop: 50,
        borderBottomEndRadius: 20,
        borderBottomLeftRadius: 20,
        height: 70,
    },
    sud: {
        marginLeft: 10,
        flexDirection: 'row',
        gap: 260,
    },
    hud: {
        marginTop: 10,
        marginLeft: 10,
        flexDirection: 'row',
        gap: 135,
    },
    ad: {
        flexDirection: 'row',
        justifyContent: "space-around",
        marginTop: 40,
    },
    af: {
        flexDirection: 'row',
        justifyContent: "space-around",
    },
    ag: {
        flexDirection: 'row',
        justifyContent: "space-around",
        marginTop: 50,
    },
    uges: {
        flexDirection: 'row',
        justifyContent: "space-around",
    },
    cuuu: {
        flexDirection:'row',
    },
},

)