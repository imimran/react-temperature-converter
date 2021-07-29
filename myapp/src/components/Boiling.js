
export default function Boiling({ celsius = 100 }) {
    if (celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>Water would not boil.</p>;
}
