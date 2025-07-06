import { Box, Button, Container, Heading, Input, VStack, Toast} from "@chakra-ui/react"
import { useState } from "react"
import { userPoductStore } from "../store/product"
import { Toaster, toaster} from "../components/ui/toaster"

const CreatePage = () => {
const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: ""
})
const {createProduct} = userPoductStore();

const handleAddProduct = async () => {
   const {sucess, message} = await createProduct(newProduct);
   if(sucess) {
    toaster.create({
        title: "Sucess",
        description: message,
        type: "success",
        closable: "true",
    })
   }else{
    toaster.create({
        title: "Error",
        description: message,
        type: "error",
        closable: "true"
    })
   }

   setNewProduct({name: "", price:"", image:""}) //Clear All Input when buttom clicked
}

    return (
        <Container maxW={"container.sm"}>
            <VStack spa>
                <Heading as={"h1"} size={"3xl"} textAlign={"center"} mb={8}>
                    Create New Product
                </Heading>
                <Box w={"full"} p={6} rounded={"lg"} shadow={"md"}>
                    <VStack gap={4}>
                        <Input 
                            placeholder="Product Name" 
                            name="name" 
                            value={newProduct.name} 
                            onChange={(e) => {setNewProduct({...newProduct, name: e.target.value})}}/>

                            <Input 
                            placeholder="Product Price" 
                            name="price" 
                            value={newProduct.price} 
                            onChange={(e) => {setNewProduct({...newProduct, price: e.target.value})}}/>

                            <Input 
                            placeholder="Image URL" 
                            name="image" 
                            value={newProduct.image} 
                            onChange={(e) => {setNewProduct({...newProduct, image: e.target.value})}}/>

                            <Button w={"full"} onClick={handleAddProduct}>Add Project</Button>
                    </VStack>
                </Box>

            </VStack>

        </Container>
    )
}

export default CreatePage