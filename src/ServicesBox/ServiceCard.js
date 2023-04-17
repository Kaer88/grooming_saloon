import { Link } from "react-router-dom"

export default function ServiceCard({ service }) {

    return (
        <div className="service-card">
            <h3>{service.title}</h3>
            <p>{service.price} Ft</p>
            {service.details && <p><Link to={`services/base/${service.id}`}>Részletek</Link></p>}
        </div>
    )

}