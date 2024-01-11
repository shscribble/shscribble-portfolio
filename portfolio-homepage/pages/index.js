import { Container, Box, Heading } from "@chakra-ui/react";

const Page = () => {
    return (
        <Container>
            <Box borderRadius ="lg" bg="red" p={3} mb={6} align="center">
                Hello, I&apos;m a full-stack developer based in Yukon!
            </Box>
            
                <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
             Shawn Varghese
            </Heading>
            <p>shscribble ( Audio / Software Engineer )</p>
            </Box>
            </Box>
        </Container>
    )
}

export default Page