import { useEffect, useState } from 'react';
import { Pressable, Text, View } from 'react-native'
import { Link } from "react-router-native"
import { usePlaylists } from '../../contexts/PlaylistsContext';
import LikeButton from '../LikeButton';

export default function SongCard( {songId} ) {
    const { getSong } = usePlaylists()
    const [ songSelected, setSongSelected] = useState({id: 0, name: "", artist:  [""], album: "", number: "", year: "" })
    useEffect(() => setSongSelected(getSong(songId)), [])

    return (
        <View className="my-4 flex flex-row justify-start h-16 bg-red-500 " >            
            <Link to={"/album/"+songSelected.album}>
                <View className="bg-black-100 w-16 h-16"></View>
            </Link>

            <View className="flex flex-row items-center justify-between w-4/5">
                <View className="flex flex-column align-center justify-center h-full px-4">
                    <Text className="text-black-50">{songSelected.name}</Text>
                    <View className="flex flex-row gap-2">
                        <View className="flex flex-row">
                            {
                                songSelected.artist.map((artist, key) => {
                                    return <Link key={key} to= {"/artist/"+ artist }>
                                            <Text className="text-black-100">{key > 0 ? ", " : ""}{artist}</Text>
                                        </Link>
                                })
                            }
                        </View>

                        <Text className="text-black-100">•</Text>

                        <Link to={"/album/"+ songSelected.album}>
                            <Text className="text-black-100">{songSelected.album}</Text>
                        </Link>                
                    </View>
                </View>

                <LikeButton songId={songId}></LikeButton>
            </View>

        </View>
    );
}