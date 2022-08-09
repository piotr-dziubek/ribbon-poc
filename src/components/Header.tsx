import React from 'react';
import {Box, Heading} from "@chakra-ui/react";

const Header = () => {
    return (
        <Box p="1rem" bg="gray.400">
            <header>
                <Heading as="h1" size="md">Ribbon Poc App</Heading>
            </header>
        </Box>
    );
}

export default Header;