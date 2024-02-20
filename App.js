import { StyleSheet, Text, View } from 'react-native'
import { NativeRouter, Routes, Route, Link } from "react-router-native"
import Home from './pages/Home'
import Library from './pages/Library'
import NavBar from './components/NavBar'

export default function App() {
  return (
    <NativeRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/biblioteca" element={ <Library/> } />
      </Routes>
  </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
