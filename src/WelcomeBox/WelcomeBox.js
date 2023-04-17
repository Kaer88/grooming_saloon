import "./welcomebox.css"
import Gallery from "../Gallery/gallery"
import { pictures } from '../services/imgService';

export default function WelcomeBox() {
    return (
        <div id="welcome-box">
            <div id="intro">
                <h1 >Szaffi Kutyakozmetika</h1>
                <h5>Itt az ebek mindig meglehetősen jól érzik magukat. Fingszagúan, koszosan, lerúgva és alacsony önbecsüléssel jönnek be, majd magabiztos, csillogó bundájú jószágként távoznak a kijáraton azt követően, hogy a gazdájuk vastagon tejelt. Szeretjük a kutyákat. És a pénzt.</h5>
                <a href="#" className="offerButton">Ajánlat kérése</a>
            </div>
            <Gallery pics={pictures} />
        </div>
    )
}