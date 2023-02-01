import Link from "next/link";
import { Text, useColorModeValue } from '@chakra-ui/react'
import SojoIcons from './sojologo'
import styled from '@emotion/styled'


const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 10px;
    padding: 10px;

    > svg {
            transition: 200ms ease;
            
        }
    
    &:hover > svg {
        transform: rotate(90deg);
    }
`
const Logo = () => {
    return (
        (<Link href="/" scroll={false}>
                <LogoBox>
                    <SojoIcons/>
                    <Text 
                    color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                    fontFamily='M PLUS Rounded 1c", sans-serif'
                    fontWeight="bold"
                    ml={3}>
                        SOOJO_DEV
                    </Text>
                </LogoBox>
               
        </Link>)
    );
}

export default Logo