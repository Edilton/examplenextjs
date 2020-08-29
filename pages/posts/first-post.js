import Head from 'next/head'
import Link from 'next/link'
import { Button, Box, Image, Text} from "@chakra-ui/core";
export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>

      <Box p={4} display={{ md: "flex" }}>
        <Box flexShrink="0">
            <Image
            rounded="lg"
            width={{ md: 40 }}
            src="https://bit.ly/2jYM25F"
            alt="Woman paying for a purchase"
            />
        </Box>
        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
            <Text
            fontWeight="bold"
            textTransform="uppercase"
            fontSize="sm"
            letterSpacing="wide"
            color="teal.600"
            >
            Marketing
            </Text>
            <Link
            mt={1}
            display="block"
            fontSize="lg"
            lineHeight="normal"
            fontWeight="semibold"
            href="#"
            >
           Exemplo de post
            </Link>
            <Text mt={2} color="gray.500">
            Esse é primeiro post em next js.
            </Text>
        </Box>
     </Box>
     <Link href="/">
          <a>Voltar</a>
        </Link>
    </>
    
  )
}