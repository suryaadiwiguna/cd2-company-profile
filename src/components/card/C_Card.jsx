
import { Box, Flex, AspectRatio, Heading, Text } from "@chakra-ui/react"
import Link from "next/link"

export default function C_Card({ title, briefDesc, ctaLabel, ctaURL }) {
    return (
        // <Box w={'full'} bg={'white'} px={'2em'}>
        //     <Box maxW={{ lg: '1024px' }} marginX={'auto'} pt={{ base: '2em', md: '4em' }} >
        //         <Flex flexDirection={{ base: 'column', md: 'row' }} gap={'3em'} justifyContent={'space-evenly'}>
        //             <Box style={{ 'flex': '0 0 50%' }}>
        //                 {title && <Heading fontSize={'x-large'} mb={'1em'} textTransform={'capitalize'} >{title}</Heading>}
        //                 <Text>{briefDesc}</Text>
        //                 {ctaLabel && ctaURL && <Link href={ctaURL}>
        //                     <Text mt={'10px'} color={'#FF7757'} fontStyle={'italic'}  >
        //                         {ctaLabel} &#8250;
        //                     </Text>
        //                 </Link>}
        //             </Box>
        //             {children &&
        //                 <Box flex={'0 0 50%'}>
        //                     {children}
        //                 </Box>
        //             }
        //         </Flex>
        //     </Box>
        // </Box >


        <Box py={{ base: '1em', md: '2em' }} >
            {title && <Heading fontSize={'x-large'} mb={'1em'} textTransform={'capitalize'} >{title}</Heading>}
            <Text>{briefDesc}</Text>
            {ctaLabel && ctaURL && <Link href={ctaURL}>
                <Text mt={'10px'} color={'#FF7757'} fontStyle={'italic'}  >
                    {ctaLabel} &#8250;
                </Text>
            </Link>}
        </Box>


    )
}
