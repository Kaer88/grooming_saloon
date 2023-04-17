import Nav from "./Nav";
import "./header.css"
import { Link } from "react-router-dom";
import fbIcon from "../assets/facebook.png"
import instaIcon from "../assets/instagram.png"
import tiktokIcon from "../assets/tiktok-icon.png"
import { darkModeContext } from "../DarkMode/DarkModeContext"
import { useContext } from "react"



export default function Header() {

    const darkModeToggled = useContext(darkModeContext)


    return (
        <>
            <header className={darkModeToggled===true? "darkmode" : "lightmode"}>
                <span>menu</span>
                <div className="title"><Link id="logo" to="/">Szaffi Kutyakozmetika</Link></div>
                <div id="social-media-container">
                    <a href="https://facebook.com"><img src={fbIcon} alt="fb"></img></a>
                    <a href="https://instagram.com"><img src={instaIcon} alt="inst"></img></a>
                    <a href="https://tiktok.com"><img src={tiktokIcon} alt="tik"></img></a>
                </div>
            </header>
            <Nav />
        </>
    )
}