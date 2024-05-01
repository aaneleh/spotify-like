import { useEffect, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { Link } from "react-router-native";
import Svg, { Path,} from 'react-native-svg';

import { usePlaylists } from '../../contexts/PlaylistsContext';
import LikeButton from '../LikeButton';
import Menu from '../Menu';

export default function SongCard( {songId} ) {
    const { getSong } = usePlaylists()
    const [ songSelected, setSongSelected] = useState({id: 0, name: "", artist:  [""], album: "", number: "", year: "" })
    useEffect(() => setSongSelected(getSong(songId)), [])

    const [ statusMenu, setStatusMenu] = useState(false);


    return (
        <View className="my-4 flex flex-row justify-start h-16 bg-red-500">      

            <Link to={"/album/"+songSelected.album}>
                <View className="bg-black-100 w-16 h-16"></View>
            </Link>

            <View className="flex flex-row items-center justify-between w-4/5">
                <View className="flex flex-column align-center justify-center h-full px-4">
                    <Text className="text-black-50">{songSelected.name}</Text>
                    <View className="flex flex-row gap-x-2 w-[200px] flex-wrap">
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
                            <Text className="text-black-100 ">{songSelected.album}</Text>
                        </Link>                
                    </View>
                </View>

                <View className="flex flex-row items-center justify-between w-16">
                    <LikeButton songId={songId}></LikeButton>
                    <Pressable onPress={()=>setStatusMenu(!statusMenu)}>
                        <Svg className="fill-black-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><Path d="M20 14a2 2 0 1 1-.001-3.999A2 2 0 0 1 20 14ZM6 12a2 2 0 1 1-3.999.001A2 2 0 0 1 6 12Zm8 0a2 2 0 1 1-3.999.001A2 2 0 0 1 14 12Z"></Path></Svg>
                    </Pressable>
                </View>
            </View>

            <Menu songId={songId} trigger={statusMenu} setTrigger={setStatusMenu}></Menu>

        </View>
    );
}