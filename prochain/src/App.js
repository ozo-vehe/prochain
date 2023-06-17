import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import { Main, Profile, Item, Create } from './pages';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="nft/:id" element={<Item />} />
        <Route path="/create" element={<Create />} />        
      </Routes>
      <Footer />
      <p>Hello</p>
    </>
  )
}

export default App
