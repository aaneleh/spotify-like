import { useEffect, useState } from 'react';
import { ScrollView, Text, View, Pressable } from 'react-native'
import { Svg, Path } from 'react-native-svg'
import { useParams, Link, useNavigate } from "react-router-native";

import { usePlaylists } from '../../contexts/PlaylistsContext';
import NavBar from '../../components/NavBar'
import SongCard from '../../components/SongCard';

export default function Playlist() {
    const navigate = useNavigate()

    const { playlistId } = useParams()
    const { getPlaylist, deletePlaylist } = usePlaylists()
    const [ playlistSelected, setPlaylistSelected ] = useState({id:'',name:'', songs:[]})
    
    useEffect(() => {
        setPlaylistSelected(getPlaylist(playlistId))
    }, [])

    const handleDelete = () => {
        deletePlaylist(playlistId)
        navigate("/biblioteca")
    }

    return (
        <View className="flex-1 bg-black-800 pt-16">
            <ScrollView className="px-8 mb-40">

                <View className="flex flex-row items-center justify-between">  
                    <View className="py-8">
                        <Text className="text-black-50 text-2xl">{playlistSelected.name}</Text>
                        <Text className="text-black-50">{playlistSelected.songs.length} músicas</Text>
                    </View>
                        {
                            playlistId != 0 
                            ? 
                                <View className="flex flex-row gap-8">
                                    <Link to={"/edit-playlist/"+playlistId}>
                                        <Svg className="fill-black-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><Path d="M17.263 2.177a1.75 1.75 0 0 1 2.474 0l2.586 2.586a1.75 1.75 0 0 1 0 2.474L19.53 10.03l-.012.013L8.69 20.378a1.753 1.753 0 0 1-.699.409l-5.523 1.68a.748.748 0 0 1-.747-.188.748.748 0 0 1-.188-.747l1.673-5.5a1.75 1.75 0 0 1 .466-.756L14.476 4.963ZM4.708 16.361a.26.26 0 0 0-.067.108l-1.264 4.154 4.177-1.271a.253.253 0 0 0 .1-.059l10.273-9.806-2.94-2.939-10.279 9.813ZM19 8.44l2.263-2.262a.25.25 0 0 0 0-.354l-2.586-2.586a.25.25 0 0 0-.354 0L16.061 5.5Z"></Path></Svg>
                                    </Link>
                                    <Pressable onPress={()=> handleDelete() }>
                                        <Svg className="fill-black-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><Path d="M16 1.75V3h5.25a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5H8V1.75C8 .784 8.784 0 9.75 0h4.5C15.216 0 16 .784 16 1.75Zm-6.5 0V3h5V1.75a.25.25 0 0 0-.25-.25h-4.5a.25.25 0 0 0-.25.25ZM4.997 6.178a.75.75 0 1 0-1.493.144L4.916 20.92a1.75 1.75 0 0 0 1.742 1.58h10.684a1.75 1.75 0 0 0 1.742-1.581l1.413-14.597a.75.75 0 0 0-1.494-.144l-1.412 14.596a.25.25 0 0 1-.249.226H6.658a.25.25 0 0 1-.249-.226L4.997 6.178Z"></Path><Path d="M9.206 7.501a.75.75 0 0 1 .793.705l.5 8.5A.75.75 0 1 1 9 16.794l-.5-8.5a.75.75 0 0 1 .705-.793Zm6.293.793A.75.75 0 1 0 14 8.206l-.5 8.5a.75.75 0 0 0 1.498.088l.5-8.5Z"></Path></Svg>
                                    </Pressable>
                                </View>
                            :   
                                <View className="flex flex-row gap-8"></View>
                    }
                </View>
                <View className="flex flex-col align-start justify-start">
                    {
                        playlistSelected.songs.map((song, key) => {
                            return <SongCard className="w-64" songId={song} key={key}></SongCard>
                        })
                    }
                </View>
            </ScrollView>
            <NavBar></NavBar>
        </View>
    );
}
