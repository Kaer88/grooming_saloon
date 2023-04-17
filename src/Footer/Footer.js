import { Link } from "react-router-dom"
import darkModeIcon from "../assets/dark_mode.svg"
import lightModeIcon from "../assets/light_mode.svg"
import "./footer.css"
import { useContext } from "react"
import { darkModeContext } from "../DarkMode/DarkModeContext"

export default function Footer() {

    const { darkModeToggled, setDarkModeToggled } = useContext(darkModeContext)

    function handleDarkModeClick() {
        setDarkModeToggled(!darkModeToggled)
    }

    return (
        <footer>

            <div>
                <p>Tájékoztató helye</p>
            </div>
            <div>
                <img src={darkModeToggled ? lightModeIcon : darkModeIcon } onClick={handleDarkModeClick}></img>
            </div>
        </footer>
    )
}