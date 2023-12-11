import C_Products from "@/components/contents/C_Products"
import Hero from "@/components/layout/Hero"
import C_Container from "@/components/layout/C_Container"
import C_Section from "@/components/layout/C_Section"
import { Box, Flex, Heading, Text, Button } from "@chakra-ui/react"
import Link from "next/link"

export default function Page() {

    return (
        <>
            <Hero
                bgImage="/img/products-services.jpg"
                heading="We offer high quality service and products"
            />
            <C_Container>
                <C_Section>
                    <Heading textAlign={'center'} my={'6rem'}>Travel Agency</Heading>
                    <Flex gap={'2rem'} direction={'column'}>
                        <C_Products />
                    </Flex>
                </C_Section>
            </C_Container>

            <C_Container>
                <C_Section>
                    <Heading textAlign={'center'} my={'4rem'}>Travel And Outdoor Equipment</Heading>
                    <Flex textAlign={'center'} gap={'2rem'} direction={'column'} mb={'6rem'} align={'center'}>
                        <Box bgImage={'/img/product/outdoor-equipment.jpg'} bgSize={'cover'} bgPosition={'center'} height={'inherit'} minH={'300px'} minW={'300px'} maxW={'360px'} borderRadius={'10px'} />
                        <Text>We sell and rent travel and outdoor equipments. Check out our store to explore.</Text>
                        <Link alt="shop link" href={'https://www.tokopedia.com'}> <Button color={'white'} bgColor={'#FF7757'} w={'full'} colorScheme={'orange'}> Check The Store</Button></Link>
                    </Flex>
                </C_Section>
            </C_Container>

        </>
    )
}

