import { Text, View } from 'react-native'
import { Link } from "react-router-native"

export default function ArtistCard( {artistName} ) {

    return (
        <View className="my-4 flex flex-column align-center w-32">
            <Link className="w-40" to= {"/artist/"+artistName.id}>
                <View className="bg-black-100 w-32 h-32"></View>
            </Link>
            <Link to= {"/artist/"+artistName}>
                <View className="flex flex-column align-start justify-start w-32 py-4">
                    <Text className="text-black-50">{artistName}</Text>
                </View>
            </Link>
        </View>            
    );
}