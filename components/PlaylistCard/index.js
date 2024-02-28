import { StyleSheet, Text, View } from 'react-native'
import { Link } from "react-router-native"
import { usePlaylists } from '../../contexts/PlaylistsContext';
import { useEffect, useState } from 'react';

export default function PlaylistCard( {playlistId} ) {
    const { getPlaylist } = usePlaylists()
    const [playlistSelected, setPlaylistSelected] = useState({id:'',name:'', songs:[] })
    useEffect(() => {
        setPlaylistSelected(getPlaylist(playlistId))
    }, [])

    return (
        <View className="my-4 flex flex-row justify-center align-center h-16 overflow-hidden">
            <Link to= {"/playlist/"+playlistSelected.id}>
                <View className="bg-black-100 w-16 h-16"></View>
            </Link>
            <Link to= {"/playlist/"+playlistId}>
                <View className="flex flex-column align-center justify-center h-full px-4">
                    <Text className="text-black-50">{playlistSelected.name}</Text>
                    <Text className="text-black-50">{playlistSelected.songs.length} músicas</Text>
                </View>
            </Link>
        </View>
    );
}