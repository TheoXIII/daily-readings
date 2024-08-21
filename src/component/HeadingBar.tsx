import Button from 'react-bootstrap/Button';

import { DayInfo } from "../type/universalis";
import dioceses from "../static/dioceses.json"
import {sanitize} from 'dompurify';

import "../style/heading-bar.css"

interface IProps {
    country: string,
    countryCode: string,
    diocese: string,
    dayInfo: DayInfo | null,
    showDioceseSelector: Function,
    showCountrySelector: Function
}

export default function HeadingBar(props: IProps) {
    const keys = Object.keys(dioceses)
    if (props.dayInfo) {
        return (
            <div className="heading-bar">
                <div className="top">
                    <span className="date-label" dangerouslySetInnerHTML={{__html: sanitize(props.dayInfo.date)}}></span>
                </div>
                <div className="day-label" dangerouslySetInnerHTML={{__html: sanitize(props.dayInfo.day.replace("<div style=\"text-indent: -2em; margin-left: 3em;\">&#160;&#160;", "<div>"))}}></div>
                <span className="calendar-label">
                    <Button style={{float: "left"}} onClick={() => props.showCountrySelector()}>{props.country}</Button>
                    {keys.includes(props.countryCode) && <Button style={{float: "right"}} onClick={() => props.showDioceseSelector()}>{props.diocese}</Button>}
                </span>
            </div>
        )
    }
    return <></>
}