import { Svg, Path } from 'react-native-svg'
import { Text, View, ScrollView } from 'react-native'
import NavBar from '../../components/NavBar'
import PlaylistCard from '../../components/PlaylistCard';
import { usePlaylists } from '../../contexts/PlaylistsContext';

export default function Library() {
    const { playlists } = usePlaylists() 

    return (
        <View className="flex-1 bg-black-800 pt-16">
            <View className="px-8">
                <View className="flex flex-row items-center justify-between">  
                    <Text className="text-black-50 text-4xl">Sua Biblioteca</Text>
                    <View className="flex flex-row gap-4">
                        <Svg className="fill-black-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28"><Path d="M10.25 2a8.25 8.25 0 0 1 6.34 13.53l5.69 5.69a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-5.69-5.69A8.25 8.25 0 1 1 10.25 2ZM3.5 10.25a6.75 6.75 0 1 0 13.5 0 6.75 6.75 0 0 0-13.5 0Z"></Path></Svg>
                        <Svg className="fill-black-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><Path d="M11.75 4.5a.75.75 0 0 1 .75.75V11h5.75a.75.75 0 0 1 0 1.5H12.5v5.75a.75.75 0 0 1-1.5 0V12.5H5.25a.75.75 0 0 1 0-1.5H11V5.25a.75.75 0 0 1 .75-.75Z"></Path></Svg>
                    </View>
                </View>
                <ScrollView>
                    <View className="flex flex-col items-start pt-4">
                        {
                            playlists.map((playlist, key) => {
                                return <PlaylistCard key={key} playlistId={playlist.id}></PlaylistCard>
                            })
                        }
                    </View>
                </ScrollView>
            </View>
            <NavBar></NavBar>
        </View>
    );
}
