import {Box, Container, Heading} from '@chakra-ui/react'
import PcSet from '../components/layouts/pcset'
import dynamic from 'next/dynamic'
import Section from '../components/layouts/section'
import { useColorModeValue } from '@chakra-ui/react'
import Typewriter from 'typewriter-effect'
import Layout from '../components/layouts/article'
import Paragraph from '../components/layouts/paragraph'

const WorkMyPc = dynamic(() => import('../components/layouts/pc-work'), {
    ssr: false,
    loading: () => <PcSet/>
})

const Uses = () => {
    return (
        <Layout>
            <Container maxW="container.md" pt={0} >
                <WorkMyPc/>
            </Container>
            <Section>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                <Typewriter
                options={{
                    strings: [
                        "Hello I'm Soojo as Full Stack Developer",
                        "Hello, This is a my Pc setup components "
                    ],
                    autoStart: true,
                    loop: true,
                }}
                />
            </Box>
            </Section>
            <Section>
                <Heading as="h3" variant="section-title">
                    About Setup
                </Heading>
                <Paragraph>
                    I build this setup for daily as developer and study in university. 
                    About my home use 1000W power electric
                    the setup builded without a external vga and so use Internal vga from CPU.
                </Paragraph>
            </Section>
            <Section>
                <Heading as="h3" variant="section-title">
                    My Component Uses
                </Heading>
                
                    <li>DeepCool Case</li>
                    <li>ROG STRIX B550-E MotherBoard</li>
                    <li>AMD RYZEN 7 5700G CPU</li>
                    <li>PNY XLRB 8GB 2X RAM</li>
                    <li>Deepcool fan CPU Cooler</li>
                    <li>Samsung 860 PRO SATA III 256 2X</li>
                    <li>Samsung 980 M.2 PCIE GEN 3 1X</li>
                    <li>Corsair CX750 PSU</li>
                
            </Section>
            </Layout>
    )
}

export default Uses