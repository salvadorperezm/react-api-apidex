import { Header, Footer } from '../../components'
import { Grid, GridItem } from '@chakra-ui/react'
import {
  gridContainer,
  gridHeader,
  gridMain,
  gridFooter,
} from './LandingLayoutStyles'

export const LandingLayout = ({ children }) => {
  return (
    <Grid {...gridContainer}>
      <GridItem {...gridHeader}>
        <Header />
      </GridItem>
      <GridItem {...gridMain}>{children}</GridItem>
      <GridItem {...gridFooter}>
        <Footer />
      </GridItem>
    </Grid>
  )
}
