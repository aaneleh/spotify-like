import { Text, View } from 'react-native'
import NavBar from '../../components/NavBar'

export default function Home() {
    return (
        <View className="flex-1 bg-black-800">
            <View className="grid items-center justify-center h-full">  
                <Text className="text-black-50 ">Home</Text>
            </View>
            <NavBar></NavBar>
        </View>
    );
}