import Hero from "@/components/Hero"
import { Heading, Box } from "@chakra-ui/react"

export default function Page() {
    return (
        <>
            <Hero
                bgImage="/img/teams.jpg"
                heading="We are very passionate adventurers"
            />
            <Box my={'10rem'}>

                <Heading>{"WIP: Teams Page"}</Heading>
            </Box>
        </>
    )
}
