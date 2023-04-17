import ServiceCard from "./ServiceCard"
import { useState } from "react"
import "./servicesBox.css"
import { servicesSize } from "../services/products";

export default function ServiceListBySize() {

    const [categ, setCateg] = useState(servicesSize.servicesS);
    
    
    const changeCateg = (e) => {
        
        switch (e.target.value) {
            case "s" : setCateg(servicesSize.servicesS); break;
            case "m" : setCateg(servicesSize.servicesM); break;
            case "l" : setCateg(servicesSize.servicesL); break;
        }
    }

    return (

        <div id="services-container">
            <div id="categ-switch">
                <select onChange={changeCateg}>
                    <option value="s">Kistestű kutya</option>
                    <option value="m">Közepes méretű kutya</option>
                    <option value="l">Nagytestű kutya</option>
                </select>
               
            </div>
            <div id="services">
                {categ.map((service, i) => (
                    <ServiceCard key={i} service={service} />
                ))}
            </div>
        </div>
    )
}

