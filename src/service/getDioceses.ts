import dioceses from "../static/dioceses.json"

export default function getDioceses(countryCode: any) : {name: string, code: string}[] {
    if (Object.keys(dioceses).includes(countryCode)) {
        const country : keyof typeof dioceses = countryCode;
        return dioceses[country];
    }
    return []
}