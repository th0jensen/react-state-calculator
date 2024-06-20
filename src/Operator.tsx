type Props = {
    operator: string
    setOperator: Function
}

export default function Operator({ operator, setOperator }: Props) {
    return (
        <div className="panel">
            <p>{operator}</p>
            <div className="numbers">
                {['+', '-', '*', '÷'].map((operator) => (
                    <button
                        key={operator}
                        onClick={() => setOperator(operator)}>
                        {operator}
                    </button>
                ))}
            </div>
        </div>
    )
}
