type Props = {
    calculateTotal: Function
    result: number
    setStore: Function
}

export default function Result({ calculateTotal, result, setStore }: Props) {
    function storeValue() {
        if (result) return setStore(result)
        console.log(setStore)
    }

    return (
        <div className="panel answer">
            <p>{result}</p>
            <div>
                <button onClick={() => calculateTotal()}>=</button>
                <button onClick={() => storeValue()}>Store</button>
            </div>
        </div>
    )
}
