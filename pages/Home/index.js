import { ScrollView, Text, View } from 'react-native'
import NavBar from '../../components/NavBar'
import { Link } from "react-router-native"
import { usePlaylists } from '../../contexts/PlaylistsContext';
import PlaylistCard from '../../components/PlaylistCard'
import SongCard from '../../components/SongCard'

export default function Home() {
    
    const { history, playlists } = usePlaylists() 

    return (
        <View className="flex-1 bg-black-800">
            <View className="grid items-center justify-center h-full">  
                <ScrollView className="mb-40 flex flex-col pt-20 gap-8 w-4/5">
{/*                 <View>
                        <Text className="text-black-50">Recentes</Text>
                        <View className="flex flex-col items-start pt-4">
                            ultimos artista, albuns e playlistas acessados
                            pega os ultimos de cada array
                        </View>
                    </View> 
                    */}
                    <View>
                        <Text className="text-black-50 text-2xl">Continue ouvindo</Text>
                        <View className="flex flex-row flex-wrap gap-y-0 gap-x-8 justify-between mr-16">
                            { // ultimas musicas favoritadas 
                                history[1].map((song, key) => {
                                    return (
                                        <View className="w-72" key={key}>
                                            <SongCard songId={song}></SongCard>
                                        </View>
                                    )
                                })
                            }
                        </View>
                    </View>
                    <View>
                        <Text className="text-black-50 text-2xl">Artistas recentes</Text>
                        <View className="flex flex-col items-start py-4 gap-4">
                            {
                                history[2].map((artistName, key) => {
                                    return <Link to={"artist/"+artistName} key={key}>
                                        <Text className="text-black-50">{artistName}</Text>
                                    </Link>
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
                                                <PlaylistCard playlistId={playlist.id}></PlaylistCard>
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