import { StyleSheet, Text, View } from 'react-native'
import { Link } from "react-router-native"
import { usePlaylists } from '../../contexts/PlaylistsContext';
import { useEffect, useState } from 'react';

export default function PlaylistCardBig( {playlistId} ) {
    const { getPlaylist } = usePlaylists()
    const [playlistSelected, setPlaylistSelected] = useState({id:'',name:'', songs:[] })
    useEffect(() => {
        setPlaylistSelected(getPlaylist(playlistId))
    }, [])

    return (
        <View className="my-4 flex flex-column align-center w-40">
            <Link className="w-40" to= {"/playlist/"+playlistSelected.id}>
                <View className="bg-black-100 w-40 h-40"></View>
            </Link>
            <Link to= {"/playlist/"+playlistId}>
                <View className="flex flex-column align-start justify-start w-40 py-4">
                    <Text className="text-black-50">{playlistSelected.name}</Text>
                    <Text className="text-black-50">{playlistSelected.songs.length} músicas</Text>
                </View>
            </Link>
        </View>
    );
}