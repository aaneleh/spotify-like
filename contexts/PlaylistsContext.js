import { useContext, createContext, useState } from 'react'
import SongsJson from '../data/songs.json'

const PlaylistsContext = createContext({});

export function usePlaylists(){
    return useContext(PlaylistsContext);
}

export function PlaylistsProvider( { children } ) {

    /* playlists salvas localmente, localstorage? */

    const [Playlists, setPlaylists] = useState([
        {
            id: 0,
            name: 'Músicas Curtidas',
            songs: [ 0, 1, 10, 12, 16, 15, 21, 18]
        }
    ]);
    

    function getPlaylist(id){
        let selectedPlaylist = null
        Playlists.map((playlist) => {
            if(playlist.id == id) 
                selectedPlaylist = playlist
        }) 
        return selectedPlaylist==null ? 0 : selectedPlaylist
        /* return Playlists.filter((playlist) => playlist.id == id)[0] */
    }

    function getSong(id){
        let selectedSong = null
        SongsJson.map((song) => {
            if(song.id == id) 
                selectedSong = song
        })
        return selectedSong==null ? 0 : selectedSong
        /* return SongsJson.filter((song) => song.id == id)[0]  */
    }
    
    function addToPlaylist(id, songId){
        //push songID to playlist.id == id
        getPlaylist(id).push(songId)
    }

    function removeFromPlaylist(id, songId){
        //remove item from playlist.id == id where songId = songId
    }

    return (
        <PlaylistsContext.Provider value={ { Playlists, getPlaylist, getSong, addToPlaylist, removeFromPlaylist } }>
            { children }
        </PlaylistsContext.Provider> 
    )
}