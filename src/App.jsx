import NavBar from'./components/NavBar'

function App() {

    return (
        <div className="app">

            <NavBar/>

            <div className="deveo-container mx-auto pt-20 pb-12">

                <div className="grid grid-cols-12 gap-4">

                    <div className="sidebar hidden lg:flex lg:col-span-3 xl:col-span-2 flex-col h-max sticky top-20">
                        Left Sidebar
                    </div>

                    <div className="posts col-span-full lg:col-span-9 xl:col-span-7 flex flex-col gap-10">
                        Content
                    </div>

                    <div className="hidden xl:block xl:col-span-3">
                        Right Sidebar
                    </div>

                </div>

            </div>

        </div>
    )
}

export default App
