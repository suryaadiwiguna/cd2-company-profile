
import { Box, Heading, Text } from "@chakra-ui/react"
import Link from "next/link"

export default function C_Card({ title, briefDesc, ctaLabel, ctaURL }) {
    return (
        <Box py={{ base: '1em', md: '2em' }} >
            {title && <Heading fontSize={'x-large'} mb={'1em'} textTransform={'capitalize'} >{title}</Heading>}
            <Text>{briefDesc}</Text>
            {ctaLabel && ctaURL && <Link href={ctaURL} alt="">
                <Text mt={'10px'} color={'#FF7757'} fontStyle={'italic'}  >
                    {ctaLabel} &#8250;
                </Text>
            </Link>}
        </Box>


    )
}
