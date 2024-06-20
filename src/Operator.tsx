type Props = {
    operator: string
    setOperator: Function
}

export default function Operator({ operator, setOperator }: Props) {
    return (
        <div className="panel">
            <p>{operator}</p>
            <div className="numbers">
                <button onClick={() => setOperator('+')}>+</button>
                <button onClick={() => setOperator('-')}>-</button>
                <button onClick={() => setOperator('*')}>*</button>
                <button onClick={() => setOperator('÷')}>÷</button>
            </div>
        </div>
    )
}
