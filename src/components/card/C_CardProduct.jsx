import { Box, Heading, Text, Divider, Button, Flex } from "@chakra-ui/react"
import Link from "next/link"

export default function C_CardProduct({ title, image, ctaLabel, ctaURL, textCtaLabel, textCtaURL, desc }) {
    return (
        <Box maxW={{ base: 'full', lg: 'fit-content' }} bgColor={'white'} p={'2em'} borderRadius={'10px'} textAlign={'center'} >
            <Flex direction={{ base: 'column' }} gap={'2em'} justify={'center'}>
                <Heading fontSize={'large'} textTransform={'capitalize'}>{title}</Heading>
                <Flex direction={'column'} gap={'1em'} alignItems={'center'} >
                    <Box w={'full'} h={{ base: '200px', sm: '360px', lg: '260px' }} bgImage={image} bgSize={'cover'} bgPosition={'center'} />
                    <Text>{desc}</Text>
                    <Divider />
                    <Box width={'full'}>
                        {ctaLabel && ctaURL &&
                            <Link href={ctaURL} alt="">
                                <Button bg={'#FF7757'} w={'full'} color={'white'} textTransform={'capitalize'}>{ctaLabel}</Button>
                            </Link>}
                        {textCtaLabel && textCtaURL &&
                            <Link href={textCtaURL} alt="">
                                <Text mt={'10px'} color={'#FF7757'} fontStyle={'italic'} > {textCtaLabel} &rarr;</Text>
                            </Link>}
                    </Box>
                </Flex>
            </Flex>
        </Box>
    )
}
