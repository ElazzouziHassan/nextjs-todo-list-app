
import styles from './page.module.css'
import { ChakraProvider } from '@chakra-ui/react'

export default function Home() {
  return (
    <ChakraProvider>
      <main className={styles.main}>
        <h1>My NEXT JS app</h1>
      </main>
    </ChakraProvider>
  )
}
