import { useContext, createContext, useState, useEffect } from 'react'
import SongsJson from '../data/songs.json'
/* import SyncStorage from 'sync-storage'; */

const PlaylistsContext = createContext({});

export function usePlaylists(){
    return useContext(PlaylistsContext);
}

export function PlaylistsProvider( { children } ) {

    const [playlists, setPlaylists] = useState([
        {
            id: 0,
            name: 'Músicas Curtidas',
            songs: [ 0, 1, 10, 12, 16, 15, 21, 18]
        }
    ]);

    const [ history, setHistory ] = useState([
        [], /* recentes (geral) */
        [], /* ultimas musicas curtidas */
        [], /* ultimos artistas acessados */
    ])
    
    useEffect(() => {
        
        if(localStorage.getItem("playlists") !== null) 
            setPlaylists(JSON.parse(localStorage.getItem("playlists")))
        if(localStorage.getItem("history") !== null) 
            setHistory(JSON.parse(localStorage.getItem("history")))

/*             
        if(SyncStorage.getItem("playlists") !== null) 
            setPlaylists(JSON.parse(SyncStorage.getItem("playlists")))
        if(SyncStorage.getItem("history") !== null) 
            setHistory(JSON.parse(SyncStorage.getItem("history"))) */

    }, [])
    
    function updateHistory(index, value){
        if(!history[index].includes(value)) {
            history[index].push(value)
            if(history[index].length > 6) history[index].splice(0, 1)
        }
        saveHistory()
    }

    function savePlaylists(){
        localStorage.setItem("playlists", JSON.stringify(playlists))
/*         SyncStorage.setItem("playlists", JSON.stringify(playlists)) */
    }
    
    function saveHistory(){
        localStorage.setItem("history", JSON.stringify(history))
/*         SyncStorage.setItem("history", JSON.stringify(history)) */
    }

    function getPlaylist(id){
        let selectedPlaylist = null
        playlists.map((playlist) => {
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
        savePlaylists()
    }

    function removeFromPlaylist(songId, playlistId){
        getPlaylist(playlistId).songs.map((song, key) => {
            if(song == songId) {
                getPlaylist(playlistId).songs.splice(key, 1)
            }
        })
        savePlaylists()
    }

    function createPlaylist(playlistName){
        console.log(playlists)
        const newPlaylist = {
            id: playlists[playlists.length-1].id + 1,
            name: playlistName,
            songs: [] }
        setPlaylists((old) => [...old, newPlaylist])
        savePlaylists()
    }

    return (
        <PlaylistsContext.Provider value={ { playlists, history, updateHistory, getPlaylist, getSong, getAlbum, getArtist, searchSong, addToPlaylist, removeFromPlaylist, createPlaylist } }>
            { children }
        </PlaylistsContext.Provider> 
    )
}