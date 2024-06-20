import './App.css'
import NumberPanel from './NumberPanel'
import Operator from './Operator'
import Result from './Result'
import { useState } from 'react'

export default function App() {
    const [firstValue, setFirstValue] = useState('')
    const [secondValue, setSecondValue] = useState('')
    const [operator, setOperator] = useState('+')
    const [result, setResult] = useState(0)

    function calculateTotal() {
        switch (operator) {
            case '+':
                setResult(Number(firstValue) + Number(secondValue))
                break
            case '-':
                setResult(Number(firstValue) - Number(secondValue))
                break
            case '*':
                setResult(Number(firstValue) * Number(secondValue))
                break
            case '÷':
                setResult(Number(firstValue) / Number(secondValue))
                break
        }
    }

    return (
        <div className="calculator">
            <NumberPanel value={firstValue} setValue={setFirstValue} />
            <Operator operator={operator} setOperator={setOperator} />
            <NumberPanel value={secondValue} setValue={setSecondValue} />
            <Result calculateTotal={calculateTotal} result={result} />
        </div>
    )
}
