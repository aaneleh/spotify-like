import { useEffect, useState } from 'react';
import { Text, View } from 'react-native'
import { Link } from "react-router-native"
import { usePlaylists } from '../../contexts/PlaylistsContext';
import LikeButton from '../LikeButton';

import AlbumCover from '../AlbumCover';

export default function SongCardHome( {songId} ) {
    const { getSong } = usePlaylists()
    const [ songSelected, setSongSelected] = useState({id: 0, name: "", artist:  [""], album: "", number: "", year: "", albumCover: "" })
    useEffect(() => setSongSelected(getSong(songId)), [])

    return (
        <View className="h-16 flex flex-row gap-x-2">            

            <AlbumCover className="h-16 w-16" coverSource={songSelected.albumCover}></AlbumCover>

            <View className="flex flex-row w-64 h-full justify-between items-center">
                <View className="">
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