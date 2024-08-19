import {useState, useEffect} from "react";
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
    const url = `${API_URL}/voice-universalis?date=${props.date}&regionCode=${props.regionCode}&readingCode=${props.readingCode}`
    useEffect(() => setShow(false), [url]); // Hide the player if the URL changes.

    if (show) {
        return (
            <div className="player">
                <ReactPlayer height="80px"
                url={url}
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