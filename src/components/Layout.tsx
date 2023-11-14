import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";



function Layout() {

    return (
            <div className="bg-globe-bg min-h-screen">
                    <Navbar />
                    <div className="pt-8">
                        <Outlet />
                    </div>
            </div>


    )
}

export default Layout
