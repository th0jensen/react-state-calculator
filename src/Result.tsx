import './styles/Result.css'

type Props = {
    calculateTotal: Function
    result: number
    setStore: Function
}

export default function Result({ calculateTotal, result, setStore }: Props) {
    // Store the result
    const storeValue = () => setStore(result)

    return (
        <div className="panel answer">
            <p>{result}</p>
            <div className="equals-and-store">
                <button onClick={() => calculateTotal()}>=</button>
                <button onClick={storeValue}>MS</button>
            </div>
        </div>
    )
}
