import { Button, Container, Flex, HStack, Text } from "@chakra-ui/react"
import { PiPlusSquare } from "react-icons/pi"
import { Link } from "react-router-dom"
import { ColorModeProvider,ColorModeButton } from "./ui/color-mode"




const Navbar = () => {
    return (
        <Container maxW={"1140px"} px={4}>
            
            <Flex 
                h={16} alignItems={"center"} 
                justifyContent={"space-between"} 
                flexDir={
                    {base: "column", sm: "row"}
                    }>
            
            <Text
                fontSize={{base:"22", sm: "28"}}
                fontWeight={"bold"}
                textTransform={"uppercase"}
                textAlign={"center"} 
               
            >
                <Link to={"/"}>Product Store &#128722;</Link>
            </Text>

            <HStack spacing={2} alignItems={"center"}>
                <Link to={"/createPage"}>
                    <Button> <PiPlusSquare  fontSize={20} /> </Button>
                </Link>

              <ColorModeProvider>
                    <ColorModeButton />
              </ColorModeProvider>
                
            </HStack>
            </Flex>
        </Container>
    )
}

export default Navbar