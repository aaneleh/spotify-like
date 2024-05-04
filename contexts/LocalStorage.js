import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LocalStorage = new Storage({
    size: 50,
    storageBackend: AsyncStorage, 
    defaultExpires: null,
    enableCache: true,
    sync: {
    }
})

export default LocalStorage;