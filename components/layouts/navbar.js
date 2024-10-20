import Logo from "./logo";
import NextLink from 'next/link'
import {
    Container,
    Box,
    Link,
    Stack,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue,
    Heading
} from '@chakra-ui/react'
import { HamburgerIcon } from "@chakra-ui/icons";
import ThemeToggle from "./theme-toggle";
import { forwardRef } from "react";


const LinkItem = ({href,path,target,children, ...props}) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray.700', 'whiteAlpha.900')
    return (
        <Link
        as={NextLink}
        href={href}
        scroll={false}
        p={2}
        bg={active ? 'grassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
        target={target}
        {...props}
        >
        {children}
        
        </Link>
    )
}

const MenuLink = forwardRef((props, ref) => (
    <Link ref={ref} as={NextLink} {...props}/>
))

const Navbar = props => {
    const {path} = props

    return (
        <Box
        position="fixed"
        as="nav"
        w="100%"
        bg={useColorModeValue('#ffffff40', '#20202380')}
        style={{backdropFilter:'blur(10px'}}
        zIndex={2}
        {...props}
        >
            <Container 
            display="flex" 
            p={2} 
            maxW="container.md" 
            wrap="wrap" 
            align="center" 
            justify="space-between"
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                        <Logo/>
                    </Heading>
                </Flex>
                <Stack
                direction={{base: 'column', md:'row'}}
                display={{base: 'none', md:'flex'}}
                width={{base: 'full', md: 'auto'}}
                alignItems="center"
                flexGrow={1}
                mt={{base: 4, md: 0}}
                >
                    <LinkItem href="/" path={path}>
                    About
                    </LinkItem>
                    <LinkItem href="/soon" path={path}>
                    Setup
                    </LinkItem>
                    <LinkItem href="/works" path={path}>
                    Project
                    </LinkItem>
                    <LinkItem href="/soon" path={path}>
                    Contact
                    </LinkItem>
                </Stack>
                <Box flex={1} align="right">
                <ThemeToggle/>
                    <Box ml={2} display={{base: 'inline-block',md:'none'}}>
                        <Menu>
                            <MenuButton
                            as={IconButton}
                            borderRadius="30px"
                            icon={<HamburgerIcon/>}
                            variant="outline"
                            aria-label="Options"
                            />
                        <MenuList>
                            <MenuItem as={MenuLink} href="/">
                                About
                            </MenuItem>
                            <MenuItem as={MenuLink} href="/uses">
                                Setup
                            </MenuItem>
                            <MenuItem as={MenuLink} href="/works">
                                Project
                            </MenuItem>
                            <MenuItem as={MenuLink} href="/soon">
                                Contact
                            </MenuItem>
                        </MenuList>
                        
                    </Menu>
                    </Box>
                    
                    
                </Box>
            </Container>
        </Box>
        
    )   
}

export default Navbar