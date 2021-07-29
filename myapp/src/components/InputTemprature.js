
const scaleName = {
    c: 'Calsius',
    f: 'Fahrenheit',
}


export default function ImputTemprature({ data, scale, onTemperatureChange }) {
    return (
        <fieldset>
            <legend>Enter temperature in {scaleName[scale]}:</legend>
            <input
                type="text"
                value={data}
                onChange={(e) => onTemperatureChange(e, scale)}
            />
        </fieldset>
    );
}
