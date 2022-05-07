import Pokemon from './Pokemon'

const PokemonList = ({ list }) => {
  return (
    <ul>
      {list.map((pokemon) => {
        return <Pokemon key={pokemon.name} pokemon={pokemon} />
      })}
    </ul>
  )
}

export default PokemonList
