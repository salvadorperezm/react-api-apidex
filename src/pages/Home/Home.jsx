import { Box, SimpleGrid, Button } from '@chakra-ui/react'
import { LandingLayout } from '../../layout/'
import {
  homeContainer,
  homeContainerButton,
  homeContainerGrid,
} from './HomeStyles'
import { useState, useEffect } from 'react'
import { Card } from '../../components'

export const Home = () => {
  const [allPokemons, setAllPokemons] = useState([])
  const limit = 20
  const [loadPoke, setLoadPoke] = useState(
    `${process.env.REACT_APP_PUBLIC_URL}?limit=${limit}`
  )

  const getAllPokemons = async () => {
    const res = await fetch(loadPoke)

    const data = await res.json()
    setLoadPoke(data.next)

    function createPokemonObject(result) {
      result.forEach(async (pokemon) => {
        const res = await fetch(
          `${process.env.REACT_APP_PUBLIC_URL}/${pokemon.name}`
        )
        const data = await res.json()
        setAllPokemons((currentList) => [...currentList, data])
      })
    }
    createPokemonObject(data.results)
  }
  useEffect(() => {
    getAllPokemons()
  }, [])

  return (
    <LandingLayout>
      <Box {...homeContainer}>
        <SimpleGrid {...homeContainerGrid}>
          {allPokemons.map((pokemon) => {
            return <Card key={pokemon.id} pokemon={pokemon} />
          })}
        </SimpleGrid>
        <Button
          {...homeContainerButton}
          onClick={() => {
            getAllPokemons()
          }}
        >
          More Pokemons
        </Button>
      </Box>
    </LandingLayout>
  )
}
