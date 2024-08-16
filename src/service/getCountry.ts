import countryCodes from "../static/countryCodes.json"

export default function getCountry(address: any) : {name: string, code: string} {
    if (address.country && Object.keys(countryCodes.countries).includes(address.state)) {
        const country : keyof typeof countryCodes.countries = address.country;
        return {
            name: country,
            code: countryCodes.countries[country]
        }
    } if (address.state && Object.keys(countryCodes.states).includes(address.state)) {
        const state : keyof typeof countryCodes.states = address.state
        return {
            name: state,
            code: countryCodes.states[state]
        }
    }
    return {
        name: "General calendar",
        code: "general"
    }
}