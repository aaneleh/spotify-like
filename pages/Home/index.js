import { StyleSheet, Text, View } from 'react-native'
import { Link } from "react-router-native"
import NavBar from '../../components/NavBar'
import PlaylistCard from '../../components/PlaylistCard';

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.whiteFont}>Home</Text>
            <NavBar></NavBar>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#212121',
        alignItems: 'center',
        justifyContent: 'center',
    },
    whiteFont: {
        color: '#fff',
    },
});
