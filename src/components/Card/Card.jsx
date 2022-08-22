import {
  Box,
  Heading,
  Image,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from '@chakra-ui/react'
import {
  cardButton,
  cardContainer,
  cardSubtitle,
  cardTextContainer,
  cardTitle,
} from './CardStyles'
import { PokemonModal } from '../PokemonModal'

export const Card = ({ pokemon }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box {...cardContainer}>
      <Box>
        <Image
          src={pokemon.sprites.other.home.front_default}
          alt={pokemon.name}
        />
      </Box>
      <Box {...cardTextContainer}>
        <Heading {...cardTitle}>{pokemon.name.toUpperCase()}</Heading>
        <Text {...cardSubtitle}>{pokemon.id}</Text>
        <Button onClick={onOpen} {...cardButton}>
          Know More
        </Button>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{pokemon.name.toUpperCase()}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <PokemonModal pokemon={pokemon} />
          </ModalBody>

          <ModalFooter>
            <Button {...cardButton} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}
