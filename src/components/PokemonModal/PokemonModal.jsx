import {
  Box,
  Image,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'
import { pokemonTypes, pokemonTypesContainer } from './PokemonModalStyles'

export const PokemonModal = ({ pokemon }) => {
  return (
    <Box>
      <Box {...pokemonTypesContainer}>
        {pokemon.types.map((type) => {
          return (
            <Text key={type.type.name} {...pokemonTypes}>
              {type.type.name}
            </Text>
          )
        })}
      </Box>
      <Box>
        <Image
          src={pokemon.sprites.other.home.front_default}
          alt={pokemon.name}
        />
      </Box>
      <Box>
        <Box>
          <TableContainer>
            <Table>
              <Thead>
                <Tr>
                  <Th>Stat</Th>
                  <Th>Value</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>HP</Td>
                  <Td>{pokemon.stats[0].base_stat}</Td>
                </Tr>
                <Tr>
                  <Td>Attack</Td>
                  <Td>{pokemon.stats[1].base_stat}</Td>
                </Tr>
                <Tr>
                  <Td>Defense</Td>
                  <Td>{pokemon.stats[2].base_stat}</Td>
                </Tr>
                <Tr>
                  <Td>Height</Td>
                  <Td>{pokemon.height}f</Td>
                </Tr>
                <Tr>
                  <Td>Weight</Td>
                  <Td>{pokemon.weight}lb</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  )
}
