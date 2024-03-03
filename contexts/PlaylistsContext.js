import { useContext, createContext, useState } from 'react'
import SongsJson from '../data/songs.json'

const PlaylistsContext = createContext({});

export function usePlaylists(){
    return useContext(PlaylistsContext);
}

export function PlaylistsProvider( { children } ) {

    /* @todo Criar um método para salvar localmente e chamar depois de cada método que edita playlists */

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
    }

    function getSong(id){
        let selectedSong = null
        SongsJson.map((song) => {
            if(song.id == id) 
                selectedSong = song
        })
        return selectedSong==null ? 0 : selectedSong
    }

    function getAlbum(albumName) {
        let songs = []
        SongsJson.map((song) => {
            if(song.album == albumName) 
                songs.push(song)
        })
        return songs
    }

    function getArtist(artistName) {
        let songs = []
        SongsJson.map((song) => {
            song.artist.map((artist) => {
                if(artist == artistName) 
                    songs.push(song)
            })
        })
        return songs
    }
    
    function searchSong(search){
        let searchUpper = search.toUpperCase()
        let songs = []
        SongsJson.map((song) => {
            if(song.name.toUpperCase().includes(searchUpper) || song.album.toUpperCase().includes(searchUpper)) {
                songs.push(song.id)
            } else {
                for(let i = 0; i < song.artist.length; i++){
                    if(song.artist[i].toUpperCase().includes(searchUpper)) {
                        songs.push(song.id)
                        break
                    }
                }
            }
        })
        return songs
    }

    function addToPlaylist(songId, playlistId){
        getPlaylist(playlistId).songs.push(songId)
    }

    function removeFromPlaylist(songId, playlistId){
        getPlaylist(playlistId).songs.map((song, key) => {
            if(song == songId) {
                getPlaylist(playlistId).songs.splice(key, 1)
            }
        })
    }

    return (
        <PlaylistsContext.Provider value={ { Playlists, getPlaylist, getSong, getAlbum, getArtist, searchSong, addToPlaylist, removeFromPlaylist } }>
            { children }
        </PlaylistsContext.Provider> 
    )
}