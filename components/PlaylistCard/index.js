import { StyleSheet, Text, View } from 'react-native'
import { Link } from "react-router-native"
import { usePlaylists } from '../../contexts/PlaylistsContext';
import { useEffect, useState } from 'react';


export default function PlaylistCard( {id} ) {

    const { getPlaylist } = usePlaylists()
    const [playlistSelected, setPlaylistSelected] = useState({id:'',name:'', songs:[]})
    useEffect(() => {
        setPlaylistSelected(getPlaylist(id))
    }, [])

    return (
        <View style={styles.container}>
            
            <Link to= {"/playlist/"+playlistSelected.id}
            underlayColor="#f0f4f7" >
                <View style={styles.playlistCover}></View>
            </Link>
            <Link to= {"/playlist/"+id}
            underlayColor="#f0f4f7" >
                <View style={styles.playlistDescription}>
                    <Text style={styles.whiteFont}>{playlistSelected.name}</Text>
                    <Text style={styles.whiteFont}>{playlistSelected.songs.length} músicas</Text>
                </View>
            </Link>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        gap: 4,
    },
    whiteFont: {
        color: '#fff',
    },
    playlistCover: {
        backgroundColor: '#000',
        height: 36,
        width: 36
    },
});
