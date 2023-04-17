import contact from "../icons/contactus.svg"
import call from "../icons/call.svg"
import directions from "../icons/directions.svg"
import { NavLink } from "react-router-dom"

export default function Nav() {
    return (
        <nav>
            <ul id="navigationList">
                <li><NavLink to="feedback"><img src={directions}></img>Megszépüléseink</NavLink></li>
                <li><NavLink to="services"><img src={contact}></img>Áraink és szolgáltatások</NavLink></li>
                <li><NavLink to="important"><img src={call}></img>Tudnivalók</NavLink></li>
            </ul>
        </nav>
    )
}