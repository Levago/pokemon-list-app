import { useState, useEffect } from 'react';

const usePokemon = (url) => {
    const [anterior, setAnterior] = useState(null);
    const [siguiente, setSiguiente] = useState(null);
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(url).then((response) => response.json())
            .then((data) => {
                console.log(data);
                setPokemons(data.results);
                setAnterior(data.previous);
                setSiguiente(data.next);
                setLoading(false);
            })
    }, [url])

    return { pokemons, loading, anterior, siguiente }
}

export default usePokemon;