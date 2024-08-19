import {Reading} from '../type/universalis';
import AudioPlayer from './AudioPlayer';

interface IProps {
    name: string,
    reading: Reading | null,
    date: string,
    regionCode: string,
    readingCode: "reading1" | "reading2"
}

export default function ReadingCard(props: IProps) {
    if (props.reading)
        return(
            <div className="text">
                <h1>{props.name}</h1>
                <h3 dangerouslySetInnerHTML={{__html: props.reading.heading}}></h3>
                <h3 dangerouslySetInnerHTML={{__html: props.reading.source}}></h3>
                <p dangerouslySetInnerHTML={{__html: props.reading.text}}></p>
                <AudioPlayer date={props.date} regionCode={props.regionCode} readingCode={props.readingCode}/>
            </div>
        )
    else
        return(<></>)
}