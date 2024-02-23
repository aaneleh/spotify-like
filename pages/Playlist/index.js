import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { useParams } from "react-router-native"
import { usePlaylists } from '../../contexts/PlaylistsContext';
import NavBar from '../../components/NavBar'
import SongCard from '../../components/SongCard';

export default function Playlist() {
    const { playlistId } = useParams()
    const { getPlaylist } = usePlaylists()
    const [playlistSelected, setPlaylistSelected] = useState({id:'',name:'', songs:[]})
    useEffect(() => {
        setPlaylistSelected(getPlaylist(playlistId))
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.playlistCover}></View>
            <View style={styles.playlistDescription}>
                <Text style={styles.whiteFont}>{playlistSelected.name}</Text>
                <Text style={styles.whiteFont}>{playlistSelected.songs.length} músicas</Text>
            </View>
            <View>
                {
                    playlistSelected.songs.map((song, key) => {
                        return <SongCard songId={song} key={key}></SongCard>
                    })
                }
            </View>

            <NavBar></NavBar>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        gap: 4,
        backgroundColor: '#212121',
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
