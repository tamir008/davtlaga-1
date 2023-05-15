import { StyleSheet, View, StatusBar, SafeAreaView, Text, ImageBackground, Image, ScrollView, localImage } from 'react-native';
import { MaterialCommunityIcons, Ionicons, EvilIcons, Entypo, MaterialIcons, Octicons, Feather,AntDesign, } from '@expo/vector-icons';
//https://cdn.zochil.shop/zochil.mn/cover.png
export default function App({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
                <View>
                <View style={styles.sag}>
                <Feather style={styles.icon1} name="list" />
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
    

},

)




