import { StyleSheet, View, StatusBar, SafeAreaView, Text } from 'react-native';
import { MaterialCommunityIcons, Ionicons, EvilIcons, Entypo,Feather } from '@expo/vector-icons';
export default function App() {
    return (

        <SafeAreaView style={styles.container}>
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
                <View style={styles.cuv2}></View>
                <View style={styles.cuv3}></View>
                <View style={styles.cuv4}></View>
            </View>
        </SafeAreaView>


    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
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
}
)

