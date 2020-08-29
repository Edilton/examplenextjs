import React from 'react'
import { Box } from "@chakra-ui/core";
import Link from 'next/link'

class Calc extends React.Component {

    render() {
      return (
          <>
           <Box bg="Teal" w="100%" p={4} color="white">
              Este é um box 
              
              <Link href="/">
              <a>Voltar</a>
            </Link>
          </Box>
          </>
        );
    }
  }

export default Calc;