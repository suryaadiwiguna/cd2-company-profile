import { Box, Center } from "@chakra-ui/react"

export default function C_Container({ children, bgColor, bgImage }) {
    return (
        <>
            <Box maxW={'full'} bgImage={bgImage ? bgImage : null} bgColor={bgColor ? bgColor : null} px={'2em'} py={'2em'}>
                <Center>
                    {children}
                </Center>
            </Box>
        </>
    )
}
