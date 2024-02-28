import { Pressable, Text, View } from 'react-native'
import { Link } from "react-router-native"
import { usePlaylists } from '../../contexts/PlaylistsContext';
import { useEffect, useState } from 'react';
import { Svg, Path } from 'react-native-svg';

export default function SongCard( {songId} ) {
    const { getSong, addToPlaylist } = usePlaylists()
    const [ songSelected, setSongSelected] = useState({id: 0, name: "", artist:  [""], album: "", number: "", year: "" })
    useEffect(() => setSongSelected(getSong(songId)), [])

    return (
        <View className="my-4 flex flex-row justify-start h-16 overflow-hidden bg-red-500">            
            <Link to={"/song/"+songSelected.id}>
                <View className="bg-black-100 w-16 h-16"></View>
            </Link>

            <View className="flex flex-row items-center justify-between w-4/5">
                <View className="flex flex-column align-center justify-center h-full px-4">
                    <Text className="text-black-50">{songSelected.name}</Text>
                    <View className="flex flex-row gap-2">
                        <Link to= {"/artist/"+ songSelected.artist}>
                            <Text className="text-black-100">{songSelected.artist}</Text>
                        </Link>
                        <Text className="text-black-100">•</Text>
                        <Link to= {"/artist/"+ songSelected.artist+"/"+songSelected.album}>
                            <Text className="text-black-100">{songSelected.album}</Text>
                        </Link>                
                    </View>
                </View>

                <Pressable onPress={()=> addToPlaylist(0, id)}>
                    <Svg className="stroke-black-100 fill-transparent" fill="transparent" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><Path d="M14 20.408c-.492.308-.903.546-1.192.709-.153.086-.308.17-.463.252h-.002a.75.75 0 0 1-.686 0 16.709 16.709 0 0 1-.465-.252 31.147 31.147 0 0 1-4.803-3.34C3.8 15.572 1 12.331 1 8.513 1 5.052 3.829 2.5 6.736 2.5 9.03 2.5 10.881 3.726 12 5.605 13.12 3.726 14.97 2.5 17.264 2.5 20.17 2.5 23 5.052 23 8.514c0 3.818-2.801 7.06-5.389 9.262A31.146 31.146 0 0 1 14 20.408Z"></Path></Svg>
                </Pressable>
            </View>

        </View>
    );
}