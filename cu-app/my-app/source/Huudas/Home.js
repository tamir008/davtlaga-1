import { StyleSheet, View, StatusBar, SafeAreaView, Text } from 'react-native';
import { MaterialCommunityIcons, Ionicons,EvilIcons} from '@expo/vector-icons';
export default function App() {
    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.cuv0}>
                <View style={styles.cuv1}>
                    <Ionicons style={styles.icon1} name="list" />
                    <Text style={styles.tex}>297 </Text>
                <EvilIcons style={{fontSize:40}} name='sc-pinterest'/>
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
        fontSize: 40,
        alignItems: "center",
        flexDirection: 'row',
        marginLeft: 10,
    },
    cuv1: {
        flexDirection: 'row',
        fontWeight: "bold",
        // gap: 20,
        alignItems: "center",

    },
    tex: {
        fontSize: 23,
        marginLeft:10,
    },
}
)

