import { useState } from "react"
import "./gallery.css"
import fwdIcon from "./icons/chevron_right_FILL0_wght400_GRAD0_opsz48.svg"
import backIcon from "./icons/chevron_left_FILL0_wght400_GRAD0_opsz48.svg"

export default function Gallery(props) {

    const [currentPicIndex, setPic] = useState(0)

    const nextPic = () => {
        if (currentPicIndex < props.pics.length - 1) {
            setPic(prevIndex => prevIndex + 1)
        } else setPic(0)

    }

    const prevPic = () => {
        if (currentPicIndex > 0) {
            setPic(prevIndex => prevIndex - 1)
        } else setPic(props.pics.length - 1)
    }

    const setPicIndex = (e) => {
        console.log(e)
        console.log(e.target.dataset.idx)
        setPic(Number(e.target.dataset.idx))
    }

    return (
        <div className="gallery">
            <div id="img-wrapper">
                <div className="sidebar left" onClick={prevPic}><img src={backIcon}></img></div>
                <div className="sidebar right" onClick={nextPic}><img src={fwdIcon}></img></div>
                <img alt="gallery-img" src={props.pics[currentPicIndex].src} className="gallery-img"></img>
                <div id="gallery-nav">
                    {props.pics.map((item, idx) =>
                        idx === currentPicIndex ?
                            <div className={"gallery-nav-selector current"} key={idx} data-idx={idx} onClick={setPicIndex}></div>
                            :
                            <div className={"gallery-nav-selector"} key={idx} data-idx={idx} onClick={setPicIndex}></div>

                    )}
                </div>

            </div>
        </div>
    )
}