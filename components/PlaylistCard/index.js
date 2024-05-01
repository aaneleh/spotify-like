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
        <View>
            <Link to= {"/playlist/"+playlistSelected.id}>
                <View className="my-4 flex flex-row justify-start align-center w-screen h-16 overflow-hidden">
                    <View className="bg-black-100 w-16 h-16"></View>
                    <View className="flex flex-column align-center justify-center h-full px-4">
                        <Text className="text-black-50">{playlistSelected.name}</Text>
                        <Text className="text-black-50">{playlistSelected.songs.length} músicas</Text>
                    </View>
                </View>
            </Link>
        </View>
        
    );
}