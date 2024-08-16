import countryCodes from "../static/countryCodes.json";
import Selector from './Selector'

interface IProps {
    setCountry: Function,
    show: boolean,
    onHide: Function
}

export default function CountrySelector(props: IProps) {
    const countries = [];
    for (const [name, code]  of Object.entries(countryCodes.countries))
        countries.push({name: name, code: code});
    for (const [name, code]  of Object.entries(countryCodes.states))
        countries.push({name: name, code: code});
    countries.sort((c1, c2) => c1.name.localeCompare(c2.name));
    countries.unshift({name: "General Calendar", code: "general"});
    return (
        <Selector setFunction={props.setCountry} items={countries} show={props.show} onHide={props.onHide} title="Select Country"></Selector>
    )
}