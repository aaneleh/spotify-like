import { NativeRouter, Routes, Route, Link } from "react-router-native"
import { PlaylistsProvider } from './contexts/PlaylistsContext';
import Home from './pages/Home'
import Library from './pages/Library'
import Playlist from './pages/Playlist'

export default function App() {
  return (
    <NativeRouter>
      <PlaylistsProvider>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/biblioteca" element={ <Library/> } />
          <Route path="/playlist/:playlistId" element={ <Playlist/> } />
        </Routes>
      </PlaylistsProvider>
    </NativeRouter>
  );
}