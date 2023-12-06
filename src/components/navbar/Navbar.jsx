import NavbarMenu from "./NavbarMenu"
import { Box, Flex, Image, Spacer, Fade } from "@chakra-ui/react"
import Link from "next/link"

export default function Navbar() {
    return (
        <Fade in={true} transition={{ enter: { duration: 0.5 } }}>
            <Box w={'100%'} h={'4em'} color={'white'} bg={'transparent'} position={'absolute'} top={0} left={0} zIndex={999} >
                <Flex px={'30px'} h={'full'} maxW={'1024px'} marginX={'auto'} align={'center'} >
                    <Box>
                        <Link href={"/"}>
                            <Image src="/logo.svg" boxSize={'130px'}></Image>
                        </Link>
                    </Box>
                    <Spacer />
                    <NavbarMenu />
                </Flex>
            </Box >
        </Fade>

    )
}
