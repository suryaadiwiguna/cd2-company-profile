'use client'

import { Box, Image, Flex, Text, Heading, Divider } from "@chakra-ui/react";


export default function C_CardPerson({ data }) {

    return (
        <>
            <Flex gap={'4em'} direction={{ base: 'column', md: 'row' }}>
                {data.map((data, index) => (
                    <Box key={index} borderRadius={'15px'} maxW={'310px'} bgColor={'white'} overflow={'hidden'} boxShadow={'base'}>
                        <Flex p={'1em'} h={'240px'} w={'full'} align={'center'} justify={'center'}>
                            <Image alt="" src={data.profileImg} borderRadius={'50%'} objectFit={'cover'} aspectRatio={1 / 1} maxH={'180px'} />
                        </Flex>
                        <Flex align={'center'} justify={'center'} direction={'column'} textAlign={'center'} p={'1em'}>
                            <Heading fontSize={'large'} textTransform={'capitalize'} color={'#FF7757'}>{data.name}</Heading>
                            <Text fontStyle={'italic'}>{` ${data.origin.city || data.origin.country ? 'From' : null}  ${data.origin.city ? data.origin.city + "," : null} ${data.origin.country ? data.origin.country : null}`}</Text>
                            <Text my={'1em'} fontWeight={'600'} >"{data.quote}"</Text>
                            <Divider mb={'1em'} />
                            <Text fontStyle={'italic'} textTransform={'capitalize'}>{data.order ? "Purchased: " + data.order : null}</Text>
                        </Flex>
                    </Box>
                ))}
            </Flex>

        </>
    )
}
