import React, {useState, useEffect} from "react";
import ReactPlayer from "react-player";

import API_URL from "../service/apiUrl";
import { Button } from "react-bootstrap";

interface IProps {
    text: string;
}

export default function AudioPlayer(props: IProps) {
    const [show, setShow] = useState(false);

    if (show) {
        const text = props.text.replaceAll("&#x2019;","'").replaceAll(/(<.*?>)|(&.*?;)/g, " ");
        return (
            <div className="player">
                <ReactPlayer height="80px"
                url={`${API_URL}/voice?text=${encodeURI(text)}`}
                controls
                config={{ file: { forceAudio: true } }}/>
            </div>
        )
    }
    return (
        <div className="show-audio">
            <Button onClick={() => setShow(true)}>Load Audio</Button>
        </div>
    )
}