import Head from 'next/head'
import Link from 'next/link'
import { Button, Box, Image, Text} from "@chakra-ui/core";
export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
      <Button>I just consumed some ⚡️Chakra!</Button>
        <Link href="/">
          <a>Back to home</a>
        </Link>

        <Button as="a" target="_blank" variant="outline" href="https://chakra-ui.com">
            Hello
        </Button>
            </h2>
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
            Finding customers for your new business
            </Link>
            <Text mt={2} color="gray.500">
            Getting a new business off the ground is a lot of hard work. Here are five
            ideas you can use to find your first customers.
            </Text>
        </Box>
</Box>
    </>
    
  )
}