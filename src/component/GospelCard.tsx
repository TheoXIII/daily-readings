import {Reading, Prayer} from '../type/universalis';

interface IProps {
    name: string,
    reading: Reading | null,
    acclamation: Prayer | null
}

export default function GospelCard(props: IProps) {
    if (props.reading && props.acclamation)
        return(
            <div className="card">
                <h1>{props.name}</h1>
                <h2>Acclamation</h2>
                <p dangerouslySetInnerHTML={{__html: props.acclamation.text}}></p>
                <h3 dangerouslySetInnerHTML={{__html: props.reading.heading}}></h3>
                <h3 dangerouslySetInnerHTML={{__html: props.reading.source}}></h3>
                <p dangerouslySetInnerHTML={{__html: props.reading.text}}></p>
            </div>
        )
    else
        return(<></>)
}