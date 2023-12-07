import { Box, Center } from "@chakra-ui/react"

export default function C_Container({ children, bgColor }) {
    return (
        <Box maxW={'full'} bgColor={bgColor} px={'2em'} py={'2em'}>
            <Center>
                {children}
            </Center>
        </Box>
    )
}
