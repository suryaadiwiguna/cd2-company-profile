import C_Products from "@/components/C_Products"
import Hero from "@/components/Hero"
import C_Container from "@/components/layout/C_Container"
import C_Section from "@/components/layout/C_Section"
import { Flex, Heading } from "@chakra-ui/react"

export default function Page() {

    return (
        <>
            <Hero
                bgImage="/img/products-services.jpg"
                heading="We offer quality"
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
                    <Heading textAlign={'center'} my={'6rem'}>Travel And Outdoor Equipment</Heading>
                    <Flex textAlign={'center'} gap={'2rem'} direction={'column'} mb={'6rem'}>
                        <p> WIP Physical Products section redirecting to ecommerce</p>
                    </Flex>
                </C_Section>
            </C_Container>

        </>
    )
}
