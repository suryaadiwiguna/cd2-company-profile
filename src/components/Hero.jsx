'use client'
import { Box, Heading, Text, Flex, Spacer } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import Link from "next/link";

export default function Hero(props) {
    const { heading, subtitle, ctaButtonLabel, bgImage } = props

    return (
        <Box pt={'6em'} minH={'340px'} h={'fit-content'} bg={'grey'} px={'2em'} bgPosition={'center'} bgImage={bgImage ? bgImage : null} bgColor={'black'} color={'white'} backgroundSize={'cover'} position={'relative'} alignItems={'center'}>
            <Flex flexDirection={'column'} justifyContent={'space-around'} gap={'60px'} maxWidth={'1024px'} mx={'auto'} py={'3em'} >
                <Box zIndex={10} >
                    <Heading my={'0.5em'}>{heading}</Heading>
                    {subtitle && <Text>{subtitle}</Text>}
                </Box>

                {ctaButtonLabel && (<Box w={'fit-content'} bg={'#FF7757'} h={'fit'} borderRadius={'10px'} zIndex={10}>
                    <Link href='/products-services'>
                        <Flex justify={'space-between'} gap={3} mx={5} py={15} alignItems={'center'}>
                            <Heading fontSize={'medium'}>
                                {ctaButtonLabel}
                            </Heading>
                            <ArrowForwardIcon boxSize={'30px'} />
                        </Flex>
                    </Link>
                </Box>)}
                <Box bg={'black'} position={'absolute'} top={0} left={0} w={'full'} h={'full'} zIndex={0} opacity={'50%'}>
                </Box>
            </Flex>
        </Box>
    )
}
