import getDioceses from "../service/getDioceses";
import Selector from './Selector'

interface IProps {
    setDiocese: Function,
    countryCode: string,
    show: boolean,
    onHide: Function
}

export default function DioceseSelector(props: IProps) {
    const dioceses = [({name: "No Diocese", code: props.countryCode})].concat(getDioceses(props.countryCode).sort((d1, d2) => d1.name.localeCompare(d2.name)));
    return (
        <Selector setFunction={props.setDiocese} items={dioceses} show={props.show} onHide={props.onHide} title="Select Diocese"></Selector>
    )
}