import "./contact.css"

export default function Contact() {
    return (
        <div id="contacts">
            <div id="address">
                <h4>Cím, térkép</h4>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2694.9444055089225!2d19.0209093!3d47.5104739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dea4169000d1%3A0xa1a444846a5df61b!2sBudapest%2C%20Fill%C3%A9r%20u.%2016%2C%201024!5e0!3m2!1shu!2shu!4v1672760211147!5m2!1shu!2shu"
                    width="450"
                    height="450"
                    style={{
                        border:"none"
                    }
                    }
                    allowFullScreen="no"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div id="hours">
                <h4>Nyitvatartás:</h4>
                <ul>
                    <li>Hétfő: 8-20</li>
                    <li>Kedd: 8-20</li>
                    <li>Szerda: 8-20</li>
                    <li>Csütörtök: 8-20</li>
                    <li>Péntek: 8-20</li>
                    <li>Hétvégén Megbeszélés szerint</li>
                </ul>
            </div>
            <div id="info">
                <p>Cím: 1024, Budapest, Fillér utca 16</p>
                <p>Tömegközlekedéssel megközelíthető gyakorlatilag akármivel, ami megáll a Moszkván</p>
            </div>
        </div>

    )
}