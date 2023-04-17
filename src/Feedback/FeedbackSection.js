import FeedbackElement from "./feedback-element";
import "./Feedback.css"

export default function FeedbackSection({ data }) {
    return (
        <div id="feedback-container">
            <h1>Megszépüléseink</h1>
            <div>
                {data.map((data, i) =>
                    <FeedbackElement data={data} key={i}/>
                )}
            </div>

        </div>
    )
}