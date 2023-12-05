import NavbarMenu from "./NavbarMenu"
import { Box, Flex, Image, Spacer } from "@chakra-ui/react"
import Link from "next/link"

export default function Navbar() {
    return (
        <Box zIndex={20} w={'100%'} h={'4em'} color={'white'} position={'fixed'} borderBottom={'4em'} borderColor={'black'} >
            <Flex px={'30px'} h={'full'} maxW={'1024px'} marginX={'auto'} align={'center'}>
                <Box opacity={'100%'}>
                    <Link href={"/"}>
                        <Image src="/logo.svg" boxSize={'130px'}></Image>
                    </Link>
                </Box>
                <Spacer />
                <NavbarMenu />
            </Flex>
        </Box >
    )
}
