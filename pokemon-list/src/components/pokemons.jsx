import React, {useState} from "react";
import usePokemon from '../hooks/usePokemon';

const Pokemons = () => {
    
    const [actual, setActual] = useState('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0');
    const { pokemons, loading, anterior, siguiente } = usePokemon(actual)
    
    return (
        loading ?
            <p>Crgando pokemones...</p>
        :
        <div>
            <ul>        
                {pokemons.map((pokemons, index) => {
                    return <li key={index}>{pokemons.name}</li>
                })}
            </ul>
            <button onClick={() => anterior !== null && setActual(anterior)}>Anteriores</button>
            <button onClick={() => siguiente !== null && setActual(siguiente)}>Siguientes</button>
        </div>
    )
}

export default Pokemons;