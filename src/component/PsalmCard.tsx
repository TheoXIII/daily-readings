import {Prayer} from '../type/universalis';

import './card.css'

interface IProps {
    name: string,
    reading: Prayer | null
}

export default function ReadingCard(props: IProps) {
    if (props.reading)
        return(
            <div className="card">
                <h1>{props.name}</h1>
                <h3 dangerouslySetInnerHTML={{__html: props.reading.source}}></h3>
                <p dangerouslySetInnerHTML={{__html: props.reading.text}}></p>
            </div>
        )
    else
        return(<></>)
}