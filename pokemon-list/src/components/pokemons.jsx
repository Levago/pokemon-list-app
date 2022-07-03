import React, {useState, useEffect} from "react";

const Pokemons = () => {

    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const response = fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0');
        console.log(response);
    }, [])

    return <p>Lista de pokemones</p>
}

export default Pokemons;