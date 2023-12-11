import Hero from "@/components/layout/Hero"
import C_Teams from "@/components/contents/C_Teams"
import C_Container from "@/components/layout/C_Container"
import C_Section from "@/components/layout/C_Section"
import { Heading, Box, Flex } from "@chakra-ui/react"

export default function Page() {
    return (
        <>
            <Hero
                bgImage="/img/teams.jpg"
                heading="We are very passionate adventurers"
            />
            <C_Container>
                <C_Section>
                    <Box mt={'4rem'} mb={'3rem'}>
                        <Heading textAlign={'center'}>Meet The Teams</Heading>
                    </Box>
                    <Flex gap={'4rem'} flexWrap={'wrap'} justify={'space-around'}>
                        <C_Teams />
                    </Flex>
                </C_Section>
            </C_Container>
        </>
    )
}
