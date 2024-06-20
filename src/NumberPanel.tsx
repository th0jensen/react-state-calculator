type Props = {
    value: string
    setValue: Function
    storedValue: number
}

export default function NumberPanel({ value, setValue, storedValue }: Props) {
    function addValueToDisplay(newValue: string): string {
        // Don't allow two dots in the same number
        if (newValue === '.' && value.includes('.')) return value
        // 0 can't be the first number except if the input is a dot
        if (value === '0' && newValue != '.') return setValue(`${newValue}`)
        // For all other cases, append the number
        else return setValue(value + `${newValue}`)
    }

    // Trim the last character of the value
    const shaveValue = () => setValue(value.substring(0, value.length - 1))

    // Retrieve the stored value
    const retrieveValue = () => setValue(`${storedValue}`)

    return (
        <div className="panel">
            <p>{value}</p>
            <div className="numbers">
                <button onClick={retrieveValue}>MR</button>
                <button onClick={shaveValue}>C</button>
                <button onClick={() => setValue('')}>CE</button>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, '.', 0].map((number) => (
                    <button
                        key={number}
                        onClick={() => addValueToDisplay(number.toString())}>
                        {number}
                    </button>
                ))}
                <button disabled={true}></button>
            </div>
        </div>
    )
}
