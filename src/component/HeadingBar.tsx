import Button from 'react-bootstrap/Button';

import { DayInfo } from "../type/universalis";
import dioceses from "../static/dioceses.json"

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
                    <span className="date-label" dangerouslySetInnerHTML={{__html: props.dayInfo.date}}></span>
                </div>
                <div className="day-label" dangerouslySetInnerHTML={{__html: props.dayInfo.day}}></div>
                <span className="calendar-label">
                    <Button style={{float: "left"}} onClick={() => props.showCountrySelector()}>{props.country}</Button>
                    {keys.includes(props.countryCode) && <Button style={{float: "right"}} onClick={() => props.showDioceseSelector()}>{props.diocese}</Button>}
                </span>
            </div>
        )
    }
    return <></>
}