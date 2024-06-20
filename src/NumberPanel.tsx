type Props = {
    value: string
    setValue: Function
    storedValue: number
}

export default function NumberPanel({ value, setValue, storedValue }: Props) {
    function addValueToScreen(newValue: number): string {
        if (value === '0') return setValue(`${newValue}`)
        else return setValue(value + `${newValue}`)
    }

    function isDisabled(): boolean {
        if (value === '') return true
        else return false
    }

    function retrieveValue() {
        if (storedValue) return setValue(`${storedValue}`)
    }

    return (
        <div className="panel">
            <p>{value}</p>
            <div className="numbers">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
                    <button
                        key={number}
                        onClick={() => addValueToScreen(number)}>
                        {number}
                    </button>
                ))}
                <button onClick={() => retrieveValue()}>M</button>
                <button onClick={() => addValueToScreen(0)}>0</button>
                <button onClick={() => setValue('')} disabled={isDisabled()}>
                    Clear
                </button>
            </div>
        </div>
    )
}
