import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LocalStorage = new Storage({

    size: 50,

    // Use AsyncStorage for RN apps, or window.localStorage for web apps.
    // If storageBackend is not set, data will be lost after reload.
    storageBackend: AsyncStorage, // for web: window.localStorage

    defaultExpires: null,

    enableCache: true,

    sync: {
    // we'll talk about the details later.
    }
})

export default LocalStorage;