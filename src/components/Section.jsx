
import { Box, Flex, AspectRatio, Heading, Text } from "@chakra-ui/react"
import Link from "next/link"

export default function Section({ children, title, briefDesc }) {
    return (
        <Box w={'full'} bg={'white'} px={'2em'}>
            <Box maxW={{ lg: '1024px' }} marginX={'auto'} py={{ base: '2em', md: '4em' }}>
                {title && <Heading fontSize={'x-large'} mb={'1em'} textTransform={'capitalize'} >{title}</Heading>}
                <Flex flexDirection={{ base: 'column', md: 'row' }} gap={'3em'} justifyContent={'space-evenly'}>
                    <Box>
                        <Text>{briefDesc}</Text>
                        <Link href={'/about-us'}>
                            <Text mt={'10px'} color={'#FF7757'} fontStyle={'italic'}  >
                                Learn more &#8250;
                            </Text>
                        </Link>
                    </Box>
                    {children}
                </Flex>
            </Box>
        </Box >

    )
}
