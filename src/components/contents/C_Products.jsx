import { Box, Heading, Flex, Divider, Button, UnorderedList, ListItem } from "@chakra-ui/react"
import Link from "next/link"
import { createClient } from "contentful"

export default async function C_Products() {

    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    })

    const res = await client.getEntries({ content_type: 'products' })

    const product = res.items

    return (
        <>
            {
                product.map((product) => (
                    <>
                        <Flex key={product.sys?.id} gap={'2rem'} direction={{ base: 'column', sm: 'row' }} w={'full'}>
                            <Box bgImage={product.fields.image?.fields.file.url} bgSize={'cover'} bgPosition={'center'} height={'inherit'} minH={'200px'} minW={'200px'} borderRadius={'10px'}>
                            </Box>
                            <Flex gap={'1rem'} direction={'column'} w={'full'}>
                                <Heading fontSize={'large'} textTransform={'capitalize'} >{product.fields?.name}</Heading>
                                <UnorderedList>
                                    <ListItem>Location: {`${product.fields?.destinationCity}, ${product.fields?.destinationCountry}, ${product.fields?.region}`} <br /></ListItem>
                                    <ListItem>Duration: {product.fields?.duration}<br /></ListItem>
                                    <ListItem>Main Destination: {product.fields?.destination}<br /></ListItem>
                                    <ListItem>Max. Guest: {product.fields?.guestMax}<br /></ListItem>
                                    <ListItem>Facility: {product.fields?.facility}</ListItem>
                                </UnorderedList>
                                <Box>
                                    <Link href={'https://calendly.com/suryaadiwiguna/travellian-tour-consultation'} alt="">
                                        <Button w={{ base: 'full', md: 'inherit' }} bg={'#FF7757'} textColor={'white'} px={{ md: '50px' }} colorScheme={'orange'}>
                                            Book A Call
                                        </Button>
                                    </Link>
                                </Box>

                            </Flex>
                        </Flex>
                        <Divider />
                    </>
                ))
            }
        </>
    )
}
