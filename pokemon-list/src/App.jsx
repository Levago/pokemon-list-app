import React from "react"
import Pokemons from "./components/pokemons"
import Counter  from "./components/counter"

import "./App.css"
const App = () => {
      return <div className="container">
         <Pokemons  />
         <Counter />
      </div>
}

export default App