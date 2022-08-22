import { Box, Link, Text } from '@chakra-ui/react'
import { footerContainer } from './FooterStyles'

export const Footer = () => {
  return (
    <Box {...footerContainer}>
      <Text>
        created by{' '}
        <Link href='https://github.com/salvadorperezm'>@salvadorperezm</Link>{' '}
      </Text>
    </Box>
  )
}
