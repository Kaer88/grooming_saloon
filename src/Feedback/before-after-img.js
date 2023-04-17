import { useState } from "react"


export default function BeforeAfter({ pics }) {

    const [mouseOver, setMouseOver] = useState(false);

    function swapPic() {
        setMouseOver(!mouseOver)
    }

    return (
        <div className="img-container">
            <img src={mouseOver? pics.srcA : pics.srcB} onMouseOver={swapPic} onMouseLeave={swapPic} alt="before-after"></img>
        </div >
    )

}