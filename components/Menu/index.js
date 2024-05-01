import { Pressable } from 'react-native'
import { Svg, Path } from 'react-native-svg';
import { Text, View } from 'react-native'

import { usePlaylists } from '../../contexts/PlaylistsContext';
import { useEffect, useState } from 'react';

export default function Menu( {songId, trigger, setTrigger} ) {
    const { playlists, getSong, addToPlaylist, removeFromPlaylist } = usePlaylists()

    const handleAdd = (playlistId) => {
        addToPlaylist(songId, playlistId)
        setTrigger(false)
    }
    const handleRemove = (playlistId) => {
        removeFromPlaylist(songId, playlistId)
        setTrigger(false)
    }

    return (trigger) ? (
        <View className="bg-black-700 w-48 p-4 rounded absolute z-100 -top-4 right-[25%]">
            <Text className="text-black-50">
                Adicionar {getSong(songId).name} à playlist:
            </Text>
            <View className="flex flex-col gap-2 pt-2 w-full"> 
                {
                    playlists.map((p, key)=> {
                        return <View className="flex flex-row items-center w-full justify-between p-2 rounded bg-black-500 " key={key}>
                            <View >
                                <Text className="text-black-50 w-28 h-5 overflow-hidden cursor-default">{p.name}</Text>
                            </View>
                            <View>
                            {
                            p.songs.includes(songId) ? 
                                <Pressable onPress={()=>handleRemove(p.id)}>
                                    <Svg className="fill-black-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><Path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm16.28-2.72a.751.751 0 0 0-.018-1.042.751.751 0 0 0-1.042-.018l-5.97 5.97-2.47-2.47a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042l3 3a.75.75 0 0 0 1.06 0Z"></Path></Svg>
                                </Pressable>
                            :
                                <Pressable onPress={()=>handleAdd(p.id)}>
                                    <Svg className="fill-black-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><Path d="M17.28 9.28a.75.75 0 0 0-1.06-1.06l-5.97 5.97-2.47-2.47a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l6.5-6.5Z"></Path><Path d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1ZM2.5 12a9.5 9.5 0 0 0 9.5 9.5 9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5 9.5 9.5 0 0 0 2.5 12Z"></Path></Svg>
                                </Pressable>
                            }
                            </View>
                        </View>
                    })
                }
            </View>
        </View>
    ) : "";
}