import { DayInfo } from "../type/universalis";

import "../style/heading-bar.css"

interface IProps {
    region: string,
    dayInfo: DayInfo | null,
}

export default function HeadingBar(props: IProps) {
    if (props.dayInfo) {
        return (
            <div className="heading-bar">
                <span className="calendar-label">Calendar: {props.region}</span>
                <span className="date-label" dangerouslySetInnerHTML={{__html: props.dayInfo.date}}></span>
                <span className="day-label" dangerouslySetInnerHTML={{__html: props.dayInfo.day}}></span>
            </div>
        )
    }
    return <></>
}