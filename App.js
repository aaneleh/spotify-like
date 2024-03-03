import { NativeRouter, Routes, Route, Link } from "react-router-native"
import { NativeWindStyleSheet } from "nativewind";
import { PlaylistsProvider } from './contexts/PlaylistsContext';
import Home from './pages/Home'
import Search from './pages/Search'
import Library from './pages/Library'
import Playlist from './pages/Playlist'
import Album from './pages/Album'
import Artist from "./pages/Artist";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  return (
    <NativeRouter>
      <PlaylistsProvider>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/biblioteca" element={ <Library/> } />
          <Route path="/pesquisa" element={ <Search/> } />
          <Route path="/playlist/:playlistId" element={ <Playlist/> } />
          <Route path="/album/:albumName" element={ <Album/> } />
          <Route path="/artist/:artistName" element={ <Artist/> } />
        </Routes>
      </PlaylistsProvider>
    </NativeRouter>
  );
}