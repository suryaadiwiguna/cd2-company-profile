import { Box, Flex, Image, Text, UnorderedList, ListItem } from "@chakra-ui/react"
import Link from "next/link"
import C_Section from "./layout/C_Section"
import C_Container from "./layout/C_Container"

export default function C_Footer() {
    return (
        <C_Container bgImage={'/img/image1.jpg'} >
            <C_Section >
                <Flex p={'2em'} w={'fUnorderedListl'} color={'white'} direction={{ base: 'column', md: 'row' }} gap={{ base: "1rem", md: '4rem' }} >
                    <Box>
                        <Image src="/logo.svg" width={'110px'} alt="travellian logo" mb={'1rem'}></Image>
                        <Text>Jl. Sesuatu, Sukabumi, <br />West Java, Indonesia. 43151.</Text>
                    </Box>
                    <Box>
                        <Text fontWeight={'600'}>Company</Text>
                        <UnorderedList listStyleType={'none'}>
                            <ListItem><Link href='/about-us'>About</Link></ListItem>
                            <ListItem><Link href='/products-services'>Products & Services</Link></ListItem>
                            <ListItem><Link href='/products-services'>Teams</Link></ListItem>
                        </UnorderedList>
                    </Box>
                    <Box>
                        <Text fontWeight={'600'}>Shop</Text>
                        <UnorderedList listStyleType={'none'}>
                            <ListItem><Link href='https://www.amazon.com'>Amazon</Link></ListItem>
                            <ListItem><Link href='/https://www.tokopedia.com'>Tokopedia</Link></ListItem>
                            <ListItem><Link href='/https://www.shopee.com'>Shopee</Link></ListItem>
                        </UnorderedList>
                    </Box>
                    <Box>
                        <Text fontWeight={'600'}>Social Media</Text>
                        <UnorderedList listStyleType={'none'}>
                            <ListItem><Link href='https://www.instagram.com'>Instagram</Link></ListItem>
                            <ListItem><Link href='https://www.youtube.com'>YouTube</Link></ListItem>
                            <ListItem><Link href='https://www.facebook.com'>Facebook</Link></ListItem>
                        </UnorderedList>
                    </Box>
                </Flex>
            </C_Section>
        </C_Container>
    )
}
