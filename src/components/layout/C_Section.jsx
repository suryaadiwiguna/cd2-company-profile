import { Box } from "@chakra-ui/react"

export default function C_Section({ children }) {
    return (
        <Box maxW={{ lg: '1024px' }}>
            {children}
        </Box>
    )
}
