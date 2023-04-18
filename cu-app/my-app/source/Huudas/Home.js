import {StyleSheet, View } from 'react-native';
export default function App() {
    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.cuv0}>
                <View style={styles.cuv1}>
                <MaterialCommunityIcons name="list" style={styles.icon1} />
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
        backgroundColor: "blue",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, 
    },
    cuv1:{

    }
}
)

