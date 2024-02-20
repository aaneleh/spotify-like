import { StyleSheet, Text, View } from 'react-native'
import { Link } from "react-router-native"

export default function NavBar() {
    return (
        <View style={styles.container}>

            <View>
                <Link to="/"
                style={styles.navItem}
                underlayColor="#f0f4f7" >
                    <Text style={styles.whiteFont}>Home</Text>

                </Link>
            </View>
            <View>
                <Link to="/biblioteca"
                style={styles.navItem}
                underlayColor="#f0f4f7" >
                    <Text style={styles.whiteFont}>Biblioteca</Text>
                </Link>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '15%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingBottom: 50,
        gap: 8,
    },
    navItem: {
        color: '#fff',
        borderWidth: 2,
        borderColor: '#fff',
        padding: 8,
        borderRadius: 10,
    },
    whiteFont: {
        color: '#fff',
        
    }
});
