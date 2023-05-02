import { StyleSheet, View, StatusBar, SafeAreaView, Text,ImageBackground } from 'react-native';
import { MaterialCommunityIcons, Ionicons, EvilIcons, Entypo,Feather, } from '@expo/vector-icons';
//https://cdn.zochil.shop/zochil.mn/cover.png
export default function App() {
    const image={uri:"https://cdn.zochil.shop/zochil.mn/cover.png"};
    const localImage = require("../../assets/cu_logo.jpg");
    return (

        <SafeAreaView style={styles.container}>
            <ImageBackground source={localImage}resizeMode='cover' style={styles.cont} >
            <View style={styles.cuv0}>
                <View style={styles.cuv1}>
                    <Ionicons style={styles.icon1} name="list" />
                    <Text style={styles.tex}>297 </Text>
                    <EvilIcons style={{ fontSize: 35, marginBottom: 5 }} name='sc-pinterest' />
                    <View style={styles.icon2}>
                        <Ionicons style={{ fontSize: 30}} name="search" />       
                    </View>
                    <Entypo style={{ fontSize: 30, marginLeft:10}} name="bell" />
                </View>
                <View style={styles.cuv2}>
                    <View style={styles.shat}>
                    <Text style={{}}>Check-in урамшуулал</Text>
                    <Text>1-р шат</Text>
                    </View>
                    <View style={styles.ognoo}>
                    <Text style={{}}>Кофе американо</Text>
                    <Text>Дуусах огноо</Text>
                    </View>
                </View>
                <View style={styles.cuv3}></View>
                <View style={styles.cuv4}></View>
            </View>
            </ImageBackground>
        </SafeAreaView>


    )
}
const styles = StyleSheet.create({
    container: {
        flex: 0.4,
        backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        
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

    },
    tex: {
        fontSize: 21,
        marginLeft: 10,
    },
    icon2: {
        marginLeft: 170,
    },
    cont:{
        width:'100%',
        height:'100%',
    },

}
)

