import {Prayer} from '../type/universalis';
import AudioPlayer from './AudioPlayer';

interface IProps {
    name: string,
    reading: Prayer | null
}

export default function ReadingCard(props: IProps) {
    if (props.reading)
        return(
            <div className="text">
                <h1>{props.name}</h1>
                <h3 dangerouslySetInnerHTML={{__html: props.reading.source}}></h3>
                <p dangerouslySetInnerHTML={{__html: props.reading.text}}></p>
                <AudioPlayer text={props.reading.text}/>
            </div>
        )
    else
        return(<></>)
}