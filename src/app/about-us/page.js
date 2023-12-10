import Hero from "@/components/Hero";
import { Box, Heading, Image, Flex, Text } from "@chakra-ui/react";

export default function Page() {
    return (
        <>
            <Hero
                bgImage="/img/about-us.jpg"
                heading="We create unforgettable memories for you"

            />
            <Box py={'10rem'}>
                <Heading my={'2em'}>{"(WIP) About Us"}</Heading>
            </Box >
        </>
    )
}
