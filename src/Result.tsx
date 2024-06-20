type Props = {
    calculateTotal: Function
    result: number
}

export default function Result({ calculateTotal, result }: Props) {
    return (
        <div className="panel answer">
            <p>{result}</p>
            <div>
                <button onClick={() => calculateTotal()}>=</button>
            </div>
        </div>
    )
}
