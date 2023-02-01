import Head from 'next/head'
import Navbar from './navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from './footer'

const Main = ({ children, router}) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="description" content="Soojo portofolio"/>
                <meta name="author" content="Chairil Prasojo"/>
                <title>Soojo Dev</title>
            </Head>

            <Navbar path={router.asPath}/>

            <Container maxW="container.md" pt={14}>
                {children}
            </Container>
            <Footer/>
        </Box>
    )
}

export default Main