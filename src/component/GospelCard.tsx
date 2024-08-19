import {Reading, Prayer} from '../type/universalis';
import AudioPlayer from './AudioPlayer';

interface IProps {
    name: string,
    reading: Reading | null,
    acclamation: Prayer | null,
    date: string,
    regionCode: string
}

export default function GospelCard(props: IProps) {
    if (props.reading && props.acclamation)
        return(
            <div className="text">
                <h1>{props.name}</h1>
                <h3>Acclamation</h3>
                <p dangerouslySetInnerHTML={{__html: props.acclamation.text}}></p>
                <AudioPlayer date={props.date} regionCode={props.regionCode} readingCode="gospel_acclamation"/><br/>
                <h3 dangerouslySetInnerHTML={{__html: props.reading.heading}}></h3>
                <h3 dangerouslySetInnerHTML={{__html: props.reading.source}}></h3>
                <p dangerouslySetInnerHTML={{__html: props.reading.text}}></p>
                <AudioPlayer date={props.date} regionCode={props.regionCode} readingCode="gospel"/>
            </div>
        )
    else
        return(<></>)
}