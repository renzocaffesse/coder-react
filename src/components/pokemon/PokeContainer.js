import { useState, useEffect } from 'react'
import PokemonList from './PokemonList'

function PokeContainer() {

    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
      const getPokemon = async () => {
        const URL = 'https://pokeapi.co/api/v2/pokemon/?limit=30'
        const getData = await fetch(URL);
        const jsonRes = await getData.json();
        setPokemon(jsonRes.results);
      };
      getPokemon();
    }, [])

    return (
        <PokemonList list={pokemon}></PokemonList>
    )
}

export default PokeContainer
