import { Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {


  return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Navbar />
            <Routes>
                <Route path='/' element={ <Home /> } />
            </Routes>
        </Box>
  )
}

export default App
