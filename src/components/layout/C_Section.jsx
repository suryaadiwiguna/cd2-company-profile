import { Box } from "@chakra-ui/react"

export default function C_Section({ children, bgColor }) {
    return (
        <Box w={{ base: 'full', lg: '1024px' }} bgColor={bgColor} mx={'auto'}>
            {children}
        </Box>
    )
}
