import { Container, SimpleGrid, Text, VStack } from "@chakra-ui/react"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import { userPoductStore } from "../store/product"
import {ProductCard, X} from "../components/ProductCard"


const HomePage = () => {

    const {fetchProducts, products} = userPoductStore(); 
    useEffect(()=> {
        fetchProducts();
    }, [fetchProducts])

    console.log(products)
    return (
        <Container maxW={'container.x1'} py={12}>
            <VStack>
                <Text fontSize={"3xl"} fontWeight={"bold"} textAlign={"center"}>
                    Current Products
                </Text>

                <SimpleGrid columns={{ base:1, md:2,lg: 3}} gap={10} w={"full"}>
                    {products.map((product) => {
                        return <ProductCard key={product._id} product={product}/>
                    })}
                </SimpleGrid>

                {products.length === 0 && (
                    <Text>
                        No products found 😭 {" "}
                        <Link to={"/createPage"}>
                            <Text as={"span"} fontWeight={"bold"} color={{base: "gray.600", _dark:"gray.500"}} _hover={{textDecoration: "underline"}}>
                            Create a Product 
                            </Text>
                        </Link>
                    </Text>
                )}
            </VStack>
        </Container>
    )
}

export default HomePage