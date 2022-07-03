import React, { useState } from "react"

const Counter = () => {

    const [counter, setCounter] = useState(0);

    return <div>
        <p>Valor actual del contador: {counter}</p>
        <button onClick={() => { setCounter( counter - 1 ) }}>Disminuir</button>
        <button onClick={() => { setCounter( 0 ) }}>Restablecer</button>
        <button onClick={() => { setCounter( counter + 1) }}> Aumentar</button>
    </div>
}

export default Counter;