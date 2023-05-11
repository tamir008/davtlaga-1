import { StyleSheet, View, StatusBar, SafeAreaView, Text, ImageBackground, Image, ScrollView, localImage } from 'react-native';
import { MaterialCommunityIcons, Ionicons, EvilIcons, Entypo, MaterialIcons, Octicons } from '@expo/vector-icons';
//https://cdn.zochil.shop/zochil.mn/cover.png
export default function App() {
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
                <Image
                    style={styles.tinyLogo}
                    source={require('../cu_logo.jpg')}
                />
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
                <View>
                <Text>Судалгаа</Text>
                <MaterialIcons name='keyboard-arrow-right'/>
                </View>
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
        backgroundColor: '#ECF0F1',
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
        width:30,
        height: 30,
        alignItems: 'center',
        borderRadius: 30,
        justifyContent: 'center',
        backgroundColor:'#D7DBDD',
    },
    ddone: {
        flexDirection: 'row',
    },
    sash:{
        fontSize:30,
    },
    texttt:{
        alignItems:'center',
        paddingTop:8,
        backgroundColor:'#FEF5E7',
        marginTop:50,
        borderBottomEndRadius:20,
        borderBottomLeftRadius:20,
        height:70,
    },
},

)




