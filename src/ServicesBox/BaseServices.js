
import { baseServices } from "../services/products"
import ServiceCard from "./ServiceCard"

export default function BaseServices() {
    return (
        <div id="services">
            {baseServices.map((service, i) => {
                return (
                   <ServiceCard key={i} service={service} />
                )
            })}
        </div>
    )
}