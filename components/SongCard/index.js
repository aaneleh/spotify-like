import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Link } from "react-router-native"
import { usePlaylists } from '../../contexts/PlaylistsContext';
import { useEffect, useState } from 'react';


export default function SongCard( {songId} ) {
    const { getSong, addToPlaylist } = usePlaylists()
    const [ songSelected, setSongSelected] = useState({id: 0, name: "", artist:  [""], album: "", number: "", year: "" })
    useEffect(() => setSongSelected(getSong(songId)), [])

    return (
        <View style={styles.container}>
            
            <View style={styles.playlistCover}></View>

            <Text style={styles.whiteFont}>{songSelected.name}</Text>

            <Link to= {"/artist/"+ songSelected.artist}
            underlayColor="#f0f4f7">
                <Text style={styles.whiteFont}>{songSelected.artist}</Text>
            </Link>

            <Link to= {"/artist/"+ songSelected.artist+"/"+songSelected.album}
            underlayColor="#f0f4f7" >
                <Text style={styles.whiteFont}>{songSelected.album}</Text>
            </Link>

            <Pressable onPress={()=> addToPlaylist(0, id)}>
                <Text style={styles.whiteFont}>Curtir</Text>
            </Pressable>

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
