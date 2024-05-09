import { useEffect, useState } from 'react';
import { ScrollView, Text, View, TextInput, Pressable, KeyboardAvoidingView, Keyboard, Platform } from 'react-native'
import { usePlaylists } from '../../contexts/PlaylistsContext';
import NavBar from '../../components/NavBar'
import { Svg, Path } from 'react-native-svg'
import SongCard from '../../components/SongCard';

export default function Search() {
    const { searchSong } = usePlaylists()

    const [ search, setSearch ] = useState("")

    const [ searchResults, setSearchResults ] = useState([])
    const [ searchText, setSearchText ] = useState("")

    const finishSearch = () => {
        Keyboard.dismiss()
        setSearchResults(searchSong(search))
        setSearchText(search)
    }

    return (
        <View className="flex-1 bg-black-800 pt-16">
            <KeyboardAvoidingView 
                behavior={Platform.OS == 'ios' ? "padding" : "height"}>
                <View className="flex flex-row justify-center items-center gap-4 px-8 bg-black-900 rounded relative z-10">
                    <TextInput
                        placeholder='O que você quer ouvir?'
                        value = {search}
                        onChangeText={(e) => setSearch(e)}
                        onSubmitEditing={() => finishSearch()}
                        className="w-4/5 h-10 bg-black-50 p-2 rounded relative z-10"
                        />
                    <Pressable onPress={() => finishSearch()}>
                        <Svg className="fill-black-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28"><Path d="M10.25 2a8.25 8.25 0 0 1 6.34 13.53l5.69 5.69a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-5.69-5.69A8.25 8.25 0 1 1 10.25 2ZM3.5 10.25a6.75 6.75 0 1 0 13.5 0 6.75 6.75 0 0 0-13.5 0Z"></Path></Svg>
                    </Pressable>
                </View>
                <ScrollView className="px-8 mb-40 pb-20 overflow-visible relative z-1000">
                    <Text className="text-black-50 py-8">Resultados para: {searchText}</Text>
                    {
                        searchResults.map((id) => {
                            return <SongCard songId={id} key={id}></SongCard>
                        })
                    }
                </ScrollView>
            </KeyboardAvoidingView>
            <NavBar></NavBar>
        </View>
    );
}
