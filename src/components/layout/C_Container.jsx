import { Box, Center } from "@chakra-ui/react"

export default function C_Container({ children, bgImage }) {
    return (
        <>
            <Box maxW={'full'} bgColor={bgImage ? 'black' : null} px={'2em'} py={'2em'} position={'relative'} zIndex={0}>
                <Box bgImage={bgImage} bgPosition={'center'} bgSize={'cover'} position={'absolute'} top={0} left={0} w={'full'} h={'full'} opacity={'50%'} zIndex={-1}></Box>
                {children}
            </Box>
        </>
    )
}
