import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './Post'
import MainLayout from './layouts/MainLayout'

export default function App() {

    return (
        <MainLayout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/posts/:slug" element={<About />} />
            </Routes>
        </MainLayout>
    )
}