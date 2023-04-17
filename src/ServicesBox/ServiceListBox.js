import { useContext } from "react"
import { NavLink, Outlet } from "react-router-dom"
import { darkModeContext } from "../DarkMode/DarkModeContext"

export default function ServiceListBox() {

    const darkModeToggled = useContext(darkModeContext)

    return (
        <div id="services-box">
            <div id="services-nav" style = {darkModeToggled ? { backgroundColor : "rgb(22,22,23)", color : "white" } : { backgroundColor : "white", color : "black" }}>
                <NavLink to="base">Alap szolgáltatások</NavLink>
                <NavLink to="size">Méret szerinti árazás</NavLink>
                <NavLink to="info">Felárak</NavLink>
            </div>
            <div id="displayed-services">
                <Outlet />
            </div>
        </div>
    )
}