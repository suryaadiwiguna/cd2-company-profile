import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import Link from "next/link";

export default function Hero(props) {
    const { heading, subtitle, ctaButtonLabel, bgImage } = props

    return (
        <>
            <Box pt={'6em'} minH={'340px'} h={'fit-content'} bg={'grey'} px={'2em'} bgImage={bgImage ? bgImage : null} bgColor={'black'} color={'white'} bgPosition={'center'} backgroundSize={'cover'} position={'relative'} alignItems={'center'}>
                <Flex flexDirection={'column'} justifyContent={'space-around'} gap={'60px'} maxWidth={'1024px'} mx={'auto'} py={'3em'}>
                    <Box zIndex={2} >

                        <Heading my={'0.5em'}>{heading}</Heading>
                        {subtitle && <Text>{subtitle}</Text>}

                    </Box>

                    {ctaButtonLabel && (
                        <Box zIndex={2}>

                            <Box w={'fit-content'} bg={'#FF7757'} h={'fit'} borderRadius={'10px'} >
                                <Link href='/products-services'>
                                    <Flex justify={'space-between'} gap={3} mx={5} py={15} alignItems={'center'}>
                                        <Heading fontSize={'medium'}>
                                            {ctaButtonLabel}
                                        </Heading>
                                        <Text fontSize={'x-large'}>&#8250;</Text>
                                    </Flex>
                                </Link>
                            </Box>

                        </Box>
                    )
                    }
                </Flex >
                <Box bg={'black'} position={'absolute'} top={0} left={0} w={'full'} h={'full'} zIndex={1} opacity={'50%'} />
            </Box >
        </>
    )
}
