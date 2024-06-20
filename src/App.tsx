import './App.css'
import { useState } from 'react'

function App() {
    const [firstValue, setFirstValue] = useState(0)
    const [secondValue, setSecondValue] = useState(0)
    const [operator, setOperator] = useState('+')
    const [result, setResult] = useState(0)

    function calculateTotal() {
        if (operator === '+') {
            setResult(firstValue + secondValue)
        } else if (operator === '-') {
            setResult(firstValue - secondValue)
        } else if (operator === '*') {
            setResult(firstValue * secondValue)
        } else if (operator === '÷') {
            setResult(firstValue / secondValue)
        }
    }

    return (
        <div className="calculator">
            <div className="panel">
                <p>{firstValue}</p>
                <div className="numbers">
                    <button onClick={() => setFirstValue(1)}>1</button>
                    <button onClick={() => setFirstValue(2)}>2</button>
                    <button onClick={() => setFirstValue(3)}>3</button>
                    <button onClick={() => setFirstValue(4)}>4</button>
                    <button onClick={() => setFirstValue(5)}>5</button>
                    <button onClick={() => setFirstValue(6)}>6</button>
                    <button onClick={() => setFirstValue(7)}>7</button>
                    <button onClick={() => setFirstValue(8)}>8</button>
                    <button onClick={() => setFirstValue(9)}>9</button>
                    <button onClick={() => setFirstValue(0)}>0</button>
                    <button onClick={() => setFirstValue(0)}>Clear</button>
                </div>
            </div>

            <div className="panel">
                <p>{operator}</p>
                <div className="numbers">
                    <button onClick={() => setOperator('+')}>+</button>
                    <button onClick={() => setOperator('-')}>-</button>
                    <button onClick={() => setOperator('*')}>*</button>
                    <button onClick={() => setOperator('÷')}>÷</button>
                </div>
            </div>

            <div className="panel">
                <p>{secondValue}</p>
                <div className="numbers">
                    <button onClick={() => setSecondValue(1)}>1</button>
                    <button onClick={() => setSecondValue(2)}>2</button>
                    <button onClick={() => setSecondValue(3)}>3</button>
                    <button onClick={() => setSecondValue(4)}>4</button>
                    <button onClick={() => setSecondValue(5)}>5</button>
                    <button onClick={() => setSecondValue(6)}>6</button>
                    <button onClick={() => setSecondValue(7)}>7</button>
                    <button onClick={() => setSecondValue(8)}>8</button>
                    <button onClick={() => setSecondValue(9)}>9</button>
                    <button onClick={() => setSecondValue(0)}>0</button>
                    <button onClick={() => setSecondValue(0)}>Clear</button>
                </div>
            </div>
            <div className="panel answer">
                <p>{result}</p>
                <div>
                    <button onClick={calculateTotal}>=</button>
                </div>
            </div>
        </div>
    )
}

export default App
