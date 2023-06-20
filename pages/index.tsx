import { Box } from '@mui/material'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Box className={styles.container}>
      <Head>
        <title>Liconcare</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
    </Box>
  )
}
