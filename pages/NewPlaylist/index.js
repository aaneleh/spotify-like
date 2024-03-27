import { Svg, Path } from 'react-native-svg'
import { Text, View, KeyboardAvoidingView, TextInput, Pressable, Platform } from 'react-native'
import { usePlaylists } from '../../contexts/PlaylistsContext';
import { useState } from 'react';

import { Link, useNavigate } from "react-router-native";


export default function NewPlaylist() {
    
    const navigate = useNavigate()

    const { createPlaylist } = usePlaylists()

    const [ playlistName, setPlaylistName ] = useState("")

    const newPlaylist = () => {
        if(playlistName == '' || playlistName == null){
            alert("Insira um nome válido!")
        } else {
            createPlaylist(playlistName)
            navigate("/biblioteca")
        }
    }

    return (
        <View className="flex-1 bg-black-800 pt-16 h-full ">
            <KeyboardAvoidingView className="px-8 h-full"
            behavior={Platform.OS == 'ios' ? "padding" : "height"}>
                <View className="absolute top-0 right-16 z-10">
                    <Link to="/biblioteca">
                            <Svg className="fill-black-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><Path d="M5.72 5.72a.75.75 0 0 1 1.06 0L12 10.94l5.22-5.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L13.06 12l5.22 5.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L12 13.06l-5.22 5.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L10.94 12 5.72 6.78a.75.75 0 0 1 0-1.06Z"></Path></Svg>
                    </Link>
                </View>

                <View className="flex h-full items-center justify-center gap-16">
                    <Text className="text-black-50 text-2xl font-bold">Dê um nome à sua playlist</Text>
                    <View>
                        <TextInput 
                        className="text-black-50 text-lg border-b-2 border-black-50"
                        placeholder='Minha playlist'
                        value={playlistName}
                        onChangeText={(e) => setPlaylistName(e)}
                        onSubmitEditing={()=> newPlaylist()}
                        />
                    </View>
                    <Pressable className="bg-green w-20 rounded-full p-2"
                    onPress={() => newPlaylist()}>
                        <Text className="text-center">
                            Criar
                        </Text>
                    </Pressable>
                </View>

            </KeyboardAvoidingView>
        </View>
    );
}
