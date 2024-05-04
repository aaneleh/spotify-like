import { useEffect, useState } from 'react';
import { Image, View, Text } from 'react-native'

//❤❤👉 https://shaquillegalimba.medium.com/how-to-import-multiple-images-in-react-1936efeeae7b 
//❤❤👉 https://mevasanth.medium.com/how-to-use-local-images-dynamically-in-react-native-71b9f3b0db20
function importAll(r) {
    let images = {}
    r.keys().forEach((item, index) =>{
        images[item.replace('./', '')] = r(item);
    })
    return images
}

const imagesArray = importAll(require.context('../../assets', false, /\.(png|jpe?g|svg)$/))

export default function AlbumCover( {coverSource} ) {

    return (
        <Image className="w-16 h-16" source={ imagesArray[coverSource] } />
    );
}