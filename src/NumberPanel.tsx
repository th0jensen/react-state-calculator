type Props = {
    value: string
    setValue: Function
}

export default function NumberPanel({ value, setValue }: Props) {
    function addValueToScreen(newValue: number) {
        if (value === '0') {
            setValue(`${newValue}`)
        } else {
            setValue(value + `${newValue}`)
        }
    }

    function isDisabled(): boolean {
        if (value === '') {
            return true
        } else {
            return false
        }
    }

    return (
        <div className="panel">
            <p>{value}</p>
            <div className="numbers">
                <button onClick={() => addValueToScreen(1)}>1</button>
                <button onClick={() => addValueToScreen(2)}>2</button>
                <button onClick={() => addValueToScreen(3)}>3</button>
                <button onClick={() => addValueToScreen(4)}>4</button>
                <button onClick={() => addValueToScreen(5)}>5</button>
                <button onClick={() => addValueToScreen(6)}>6</button>
                <button onClick={() => addValueToScreen(7)}>7</button>
                <button onClick={() => addValueToScreen(8)}>8</button>
                <button onClick={() => addValueToScreen(9)}>9</button>
                <button onClick={() => addValueToScreen(0)}>0</button>
                <button onClick={() => setValue('')} disabled={isDisabled()}>
                    Clear
                </button>
            </div>
        </div>
    )
}
