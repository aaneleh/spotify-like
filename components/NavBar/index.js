import Svg, { Path,} from 'react-native-svg';
import { Text, View, Platform } from 'react-native';
import { Link } from "react-router-native";

export default function NavBar() {
    return (
        <View className= {`flex-1 bg-black-1000 w-full py-8 ${Platform.OS == 'web' ? "absolute bottom-0" : "absolute bottom-0"}`}>
            <View className="flex flex-row items-center justify-evenly">
                <Link to="/"
                className="w-28">
                    <View className="flex flex-col items-center">
                        <Svg className="fill-black-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><Path d="M11.03 2.59a1.501 1.501 0 0 1 1.94 0l7.5 6.363a1.5 1.5 0 0 1 .53 1.144V19.5a1.5 1.5 0 0 1-1.5 1.5h-5.75a.75.75 0 0 1-.75-.75V14h-2v6.25a.75.75 0 0 1-.75.75H4.5A1.5 1.5 0 0 1 3 19.5v-9.403c0-.44.194-.859.53-1.144ZM12 3.734l-7.5 6.363V19.5h5v-6.25a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .75.75v6.25h5v-9.403Z"></Path></Svg>
                        <Text className="text-black-50">Início</Text>
                    </View>
                </Link>
                <Link to="/pesquisa"
                className="w-28">
                    <View className="flex flex-col items-center">
                        <Svg className="fill-black-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><Path d="M10.25 2a8.25 8.25 0 0 1 6.34 13.53l5.69 5.69a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-5.69-5.69A8.25 8.25 0 1 1 10.25 2ZM3.5 10.25a6.75 6.75 0 1 0 13.5 0 6.75 6.75 0 0 0-13.5 0Z"></Path></Svg>
                        <Text className="text-black-50">Buscar</Text>
                    </View>
                </Link>
                <Link to="/biblioteca"
                className="w-28">
                    <View className="flex flex-col items-center">
                        <Svg className="fill-black-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><Path d="M10 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2Zm-.5-2a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V4a.5.5 0 0 0-.5-.5H10a.5.5 0 0 0-.5.5ZM6.17 4.165a.75.75 0 0 1-.335 1.006c-.228.114-.295.177-.315.201a.035.035 0 0 0-.008.016.423.423 0 0 0-.012.112v13c0 .07.008.102.012.112a.03.03 0 0 0 .008.016c.02.024.087.087.315.201a.749.749 0 1 1-.67 1.342c-.272-.136-.58-.315-.81-.598C4.1 19.259 4 18.893 4 18.5v-13c0-.393.1-.759.355-1.073.23-.283.538-.462.81-.598a.75.75 0 0 1 1.006.336ZM2.15 5.624a.75.75 0 0 1-.274 1.025c-.15.087-.257.17-.32.245C1.5 6.96 1.5 6.99 1.5 7v10c0 .01 0 .04.056.106.063.074.17.158.32.245a.75.75 0 0 1-.752 1.298C.73 18.421 0 17.907 0 17V7c0-.907.73-1.42 1.124-1.65a.75.75 0 0 1 1.025.274Z"></Path></Svg>
                        <Text className="text-black-50">Sua Biblioteca</Text>
                    </View>
                </Link>
            </View>
        </View>
    );
}