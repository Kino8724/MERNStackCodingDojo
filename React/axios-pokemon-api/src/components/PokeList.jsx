import { useState, useEffect } from "react";
import axios from "axios";

const PokeList = (props) => {
  const [pokemonList, setPokemonList] = useState([])
  useEffect(() => {
    const getData = async () => {
      let monsters = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
      console.log("monsters:", monsters.data.results[0])
      console.log("monsters length: ", monsters.data.results.length)
      monsters.data.results.forEach(async item => {
        let mon = await axios.get(item.url)
        setPokemonList(prev => [...prev, mon.data])
      })
    }
    getData()

  }, [])

  console.log("pokemonList:", pokemonList)


  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {
          pokemonList && pokemonList.sort((a, b) => a.id - b.id).map(item => {
            return (<div key={item.id}>
              <img src={item.sprites.front_default} />
              <p>{item?.id} {item?.name}</p>
            </div>)
          })
        }
      </div>

    </>

  )


}
export default PokeList
