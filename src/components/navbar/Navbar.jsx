
import NavbarMenu from "./NavbarMenu"
import { Box, Flex, Image, Spacer } from "@chakra-ui/react"
import Link from "next/link"

export default function Navbar() {
    return (
        <Box w={'100%'} h={'4em'} color={'white'} bg={'transparent'} position={'absolute'} top={0} zIndex={999} >
            <Flex px={'30px'} h={'inherit'} maxW={'1024px'} marginX={'auto'} align={'center'} >
                <Box>
                    <Link href={"/"} aria-label="Travellian logo">
                        <Image src="/logo.svg" w={'130px'} alt=""></Image>
                    </Link>
                </Box>
                <Spacer />
                <NavbarMenu />
            </Flex>
        </Box >

    )
}
