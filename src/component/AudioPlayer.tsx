import React, {useState, useEffect} from "react";
import ReactPlayer from "react-player";
import { PiSpeakerHighFill } from "react-icons/pi";

import API_URL from "../service/apiUrl";
import { Button } from "react-bootstrap";

interface IProps {
    date: string;
    regionCode: string;
    readingCode: "reading1" | "reading2" | "psalm" | "gospel_acclamation" | "gospel";
}

export default function AudioPlayer(props: IProps) {
    const [show, setShow] = useState(false);

    if (show) {
        return (
            <div className="player">
                <ReactPlayer height="80px"
                url={`${API_URL}/voice-universalis?date=${props.date}&regionCode=${props.regionCode}&readingCode=${props.readingCode}`}
                controls
                config={{ file: { forceAudio: true } }}/>
            </div>
        )
    }
    return (
        <div className="show-audio">
            <Button onClick={() => setShow(true)}><PiSpeakerHighFill/></Button>
        </div>
    )
}