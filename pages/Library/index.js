import { StyleSheet, Text, View } from 'react-native'
import { Link } from "react-router-native"
import NavBar from '../../components/NavBar'

export default function Library() {
    return (
        <View style={styles.container}>
            <Text>LIBRARY</Text>
            <NavBar></NavBar>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});