import { ScrollView, Text, View } from 'react-native'
import { usePlaylists } from '../../contexts/PlaylistsContext';
import NavBar from '../../components/NavBar'
import SongCardHome from '../../components/SongCardHome'
import ArtistCard from '../../components/ArtistCard'
import PlaylistCardBig from '../../components/PlaylistCardBig'
import Menu from '../../components/Menu';
import { useState } from 'react';

export default function Home() {
    
    const { history, playlists } = usePlaylists() 

    const [ trigger, setTrigger] = useState(true)

    return (
        <View className="flex-1 bg-black-800 pt-16">

            <View className="px-4 grid items-center justify-center h-full">  
                <ScrollView className="mb-40 flex flex-col gap-8 w-full ">
                    <View>
                        <Text className="text-black-50 text-2xl">Continue ouvindo</Text>
                        <View className="flex flex-row flex-wrap gap-y-0 gap-x-8 justify-between mr-16 mt-4">
                            { // ultimas musicas favoritadas 
                                history[1].map((song, key) => {
                                    return (
                                        <View className="bg-black-500 rounded m-4 pr-6" key={key}>
                                            <SongCardHome songId={song}></SongCardHome>
                                        </View>
                                    )
                                })
                            }
                        </View>
                    </View>
                    <View>
                        <Text className="text-black-50 text-2xl">Artistas recentes</Text>
                        <View className="flex flex-row flex-wrap gap-y-0 gap-x-8 justify-between mr-16">
                            {
                                history[2].map((artistName, key) => {
                                    return (
                                        <View key={key}>
                                            <ArtistCard artistName={artistName}></ArtistCard>
                                        </View>
                                    )
                                })
                            }
                        </View>
                    </View>
                    <View>
                        <Text className="text-black-50 text-2xl">Suas playlists</Text>
                        <View className="flex flex-row flex-wrap gap-y-0 gap-x-8 justify-between mr-16">
                            {
                                playlists.map((playlist, key) => {
                                    if(key < 6) 
                                        return (
                                            <View className="w-72" key={key}>
                                                <PlaylistCardBig playlistId={playlist.id}></PlaylistCardBig>
                                            </View>
                                        )
                                })
                            }
                        </View>
                    </View>
                </ScrollView>
            </View>
            <NavBar></NavBar>
        </View>
    );
}