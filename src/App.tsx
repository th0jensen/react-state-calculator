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
    const [store, setStore] = useState(0)

    function calculateTotal() {
        switch (operator) {
            case '+':
                return setResult(Number(firstValue) + Number(secondValue))
            case '-':
                return setResult(Number(firstValue) - Number(secondValue))
            case '*':
                return setResult(Number(firstValue) * Number(secondValue))
            case '÷':
                return setResult(Number(firstValue) / Number(secondValue))
        }
    }

    return (
        <div className="calculator">
            <NumberPanel
                value={firstValue}
                setValue={setFirstValue}
                storedValue={store}
            />
            <Operator operator={operator} setOperator={setOperator} />
            <NumberPanel
                value={secondValue}
                setValue={setSecondValue}
                storedValue={store}
            />
            <Result
                calculateTotal={calculateTotal}
                result={result}
                setStore={setStore}
            />
        </div>
    )
}
