import { NativeRouter, Routes, Route, Link } from "react-router-native"
import { NativeWindStyleSheet } from "nativewind";
import { PlaylistsProvider } from './contexts/PlaylistsContext';
import Home from './pages/Home'
import Search from './pages/Search'
import Library from './pages/Library'
import Playlist from './pages/Playlist'

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
        </Routes>
      </PlaylistsProvider>
    </NativeRouter>
  );
}