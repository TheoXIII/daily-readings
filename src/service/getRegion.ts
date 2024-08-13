import country_codes from "../static/country_codes.json"

export default function getRegion(address: any) : {name: string, code: string} {
    if (address.country && Object.keys(country_codes.countries).includes(address.state)) {
        const country : keyof typeof country_codes.countries = address.country;
        return {
            name: country,
            code: country_codes.countries[country]
        }
    } if (address.state && Object.keys(country_codes.states).includes(address.state)) {
        const state : keyof typeof country_codes.states = address.state
        return {
            name: state,
            code: country_codes.states[state]
        }
    }
    return {
        name: "General calendar",
        code: "general"
    }
}