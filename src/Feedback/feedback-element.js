import BeforeAfter from "./before-after-img";


export default function FeedbackElement({ data }) {


    return (
        <div className="feedback-element">
            <div className="feedback">
                <h4>{data.feedback.dogName}</h4>
                <p>{data.feedback.text}</p>
                <p>{data.feedback.ownerName}</p>
            </div>
            <BeforeAfter pics={data.pics} />
        </div>
    )
}