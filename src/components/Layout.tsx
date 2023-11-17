import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useAuth } from "../context/UserContext";
import { useEffect } from "react";
import Cookies from "js-cookie";




function Layout() {
    const auth = useAuth()
    const navigate = useNavigate();
    

    useEffect(() => {
        if (!Cookies.get('Authorization')) {
            navigate('/login');
        }
    }, [auth, navigate]);

    return (
        <main>
            <Navbar />
            <Outlet />
        </main>
    )
}

export default Layout
