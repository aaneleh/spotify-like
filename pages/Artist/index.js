import { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native'
import { useParams } from "react-router-native"
import { usePlaylists } from '../../contexts/PlaylistsContext';
import NavBar from '../../components/NavBar'
import SongCard from '../../components/SongCard';

export default function Artist() {
    const { artistName } = useParams()
    const { getArtist } = usePlaylists() 
    const [ songs, setSongs] = useState([])
    useEffect(() => {
        setSongs(getArtist(artistName))
        console.log(getArtist(artistName))
    }, [])

    return (
        <View className="flex-1 bg-black-800 pt-16">
            <ScrollView className="px-8 mb-40">
                <View className="py-8">
                    <Text className="text-black-50 text-2xl">{artistName}</Text>
                </View>
                <View className="flex flex-col align-start justify-start">
                    {
                        songs.map((song, key) => {
                            return <SongCard className="w-64" songId={song.id} key={key}></SongCard>
                        })
                    }
                </View>
            </ScrollView>
            <NavBar></NavBar>
        </View>
    );
}
