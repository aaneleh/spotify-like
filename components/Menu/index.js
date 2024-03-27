import { Pressable } from 'react-native'
import { Svg, Path } from 'react-native-svg';
import { usePlaylists } from '../../contexts/PlaylistsContext';
import { useEffect, useState } from 'react';

export default function Menu( {songId} ) {
    const { getPlaylist, addToPlaylist, removeFromPlaylist } = usePlaylists()

    /* colocar um trigger pra visibilidade */
    /* em qualquer handle torna invisivel */

    return (
        <View>
            <Text>
                Adicionar à playlist:
            </Text>
            <View> {/* map */}
                <Text>
                    Playlist 1
                    {/* <text>playlist.name</text>
                        { 
                            playlist.songs.include(songId) 
                            ?  
                                <pressable onpress="handleRemove"> 
                                    <svg>checkmark preenchido (colorido?)</svg>
                                </pressable>
                            :
                                <pressable onpress="handleAdd">
                                    <svg>circulo branco (c checkmark?)</svg>
                                </pressable>
                        }
                    */}
                </Text>
                <Text>
                    Playlist 2
                </Text>
                <Text>
                    Playlist 3
                </Text>
                <Text>
                    Playlist 4
                </Text>
            </View>
        </View>
    );
}