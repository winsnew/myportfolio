import {Container, Box, Heading, Stack, Link, List, ListItem, Button, useColorModeValue, chakra} from'@chakra-ui/react'
import Image from 'next/image'
import Section from '../components/layouts/section'
import Paragraph from '../components/layouts/paragraph'
import Typewriter from 'typewriter-effect'
import Layout from '../components/layouts/article'
import PcSet from '../components/layouts/pcset'
import dynamic from 'next/dynamic'
import {BsInstagram, BsLinkedin, BsGithub} from 'react-icons/bs'


const ProfileSet = chakra(Image, {
    shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const WorkMyPc = dynamic(() => import('../components/layouts/pc-work'), {
    ssr: false,
    loading: () => <PcSet/>
})

const Page = () => {
    
    return (
        <Layout>
        <Container>
            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title" align="center">
                        Chairil Prasojo
                    </Heading>
                    <Stack align="center" mt={10} mb={10}>
                        <Box
                        flexShrink={0}
                        mt={{base: 4, md: 0}}
                        ml={{md: 6}}
                        align="center"
                        >
                            <ProfileSet
                            width="100"
                            height="100"
                            display="inline-block"
                            borderRadius="full"
                            src="/images/sojoLogo.png"
                            alt="Sojo Image"    
                            />
                        </Box>
                    </Stack>
                    
                    <p>Undergraduate Student ( Developer / Gamers / Musician )</p>
                    
                </Box>
            </Box>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                <Typewriter
                options={{
                    strings: [
                        "Hello I'm Soojo as Full Stack Developer"
                    ],
                    autoStart: true,
                    loop: true,
                }}
                />
            </Box>

            <Section delay={0.1}>
            <Heading as="h3" variant="section-title">
                About
            </Heading>
            <Paragraph>
                Hello, I&apos;m Chairil Prasojo as undergraduate student from Dian Nuswantara University and
                I Take majored in informatics. 
                My passion as Fullstack Developer.
                And My Favorite of daily is playing music  and play game with friends.
            </Paragraph>
            </Section>
            
            <Box>
            <Section>
                <Heading as="h3" variant="section-title">
                MySetup
                </Heading>
                
                <WorkMyPc/>
                <Box align="center">
                    <Link href='/uses'>
                    <Button 
                    variant="outline"
                    colorScheme="cyan"
                    >
                        My Build
                    </Button>
                    </Link>
                </Box>
            </Section>
            </Box>
            
            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    My Fav
                </Heading>
                <Paragraph>
                    Art, Music, {''}
                
                <Link 
                href="https://instagram.com/samsol__ms?igshid=NDk5N2NlZjQ=" 
                colorScheme="purple"
                target="_blank">
                    Cat
                </Link>
                , Playing Guitar, PcSetup, {''}
                <Link href="#">
                    Music Cover
                </Link>
                <Paragraph>
                 , Drum and Coding
                </Paragraph>
                </Paragraph>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    Me On Web
                </Heading>
                <List>
                    <ListItem>
                        <Link href="">
                            <Button
                            variant="ghost"
                            colorScheme="telegram"
                            leftIcon={<BsInstagram/>}
                            >
                                @soojo_dev
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://www.linkedin.com/in/chairil-prasojo-a08480239/">
                            <Button
                            variant="ghost"
                            colorScheme="telegram"
                            leftIcon={<BsLinkedin/>}
                            >
                                @Chairil Prasojo
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://github.com/winsnew">
                            <Button 
                            variant="ghost"
                            colorScheme="telegram"
                            leftIcon={<BsGithub/>}
                            >
                                MeshHack
                            </Button>
                        </Link>
                    </ListItem>
                </List>
            </Section>

        </Container>
        </Layout>
    )
}
export {getServerSideProps} from '../components/chakra'
export default Page