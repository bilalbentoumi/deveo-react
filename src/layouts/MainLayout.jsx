import NavBar from '../components/NavBar'

export default function MainLayout({ children }) {

    return (
        <>
            <NavBar />
            <div className="deveo-container mx-auto pt-20 pb-12">
                { children }
            </div>
        </>
    )
}