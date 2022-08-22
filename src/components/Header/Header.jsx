import { Box, Image, Text } from '@chakra-ui/react'
import {
  headerContainer,
  headerLogo,
  headerLogoContainer,
  headerLogoText,
} from './HeaderStyles'

export const Header = () => {
  return (
    <Box {...headerContainer}>
      <Box {...headerLogoContainer}>
        <Image
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/770px-Pok%C3%A9_Ball_icon.svg.png'
          alt='apidex logo'
          {...headerLogo}
        />
        <Text {...headerLogoText}>ApiDex</Text>
      </Box>
    </Box>
  )
}
