import { useContext, createContext, useState } from 'react';

const PlaylistsContext = createContext({});

export function usePlaylists(){
    return useContext(PlaylistsContext);
}

export function PlaylistsProvider( { children } ) {
    const [Playlists, setPlaylists] = useState([
        {
            id: 0,
            name: 'Músicas Curtidas',
            songs: []
        },
        {
            id: 1,
            name: 'Patriota',
            songs: []
        }
    ]);
    
    /* songs importadas do json, não acho que precisa de um useState */

    function getPlaylist(id){
        //procura plalist com o ATRIBUTO do id especificado, se naõ retorna 0
        //porque se uma playlist for excluida o id das outras deve se manter
        return Playlists[id] 
    }

    function getSong(id){
        //procura plalist com o ATRIBUTO do id especificado, se naõ retorna 0
        //porque se uma playlist for excluida o id das outras deve se manter
        return 0
    }
    
    function addToPlaylist(id, songId){
        //push songID to playlist.id == id
        
    }

    function removeFromPlaylist(id, songId){
        //remove item from playlist.id == id where songId = songId
    }

    return (
        <PlaylistsContext.Provider value={ { Playlists, getPlaylist, addToPlaylist, removeFromPlaylist } }>
            { children }
        </PlaylistsContext.Provider> 
    )
}