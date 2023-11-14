import { NavLink } from "react-router-dom"

function Navbar() {

    return (
        <>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/encounter">Encounter</NavLink>
        </>
    )
}

export default Navbar
