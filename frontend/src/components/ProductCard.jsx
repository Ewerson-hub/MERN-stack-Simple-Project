import { Box, Button, Heading, HStack, Image, Input, Text, Dialog, Portal, CloseButton, VStack } from "@chakra-ui/react"
import { FaEdit } from "react-icons/fa"
import { MdDeleteForever } from "react-icons/md";
import { useColorModeValue } from "./ui/color-mode";
import { userPoductStore } from "../store/product";
import { toaster } from "./ui/toaster";
import { useState } from "react";

export const ProductCard = ({ product }) => {
    const { deleteProduct, updateProduct} = userPoductStore()

    const textColor = useColorModeValue("gray.600", "gray.200")
    const bg = useColorModeValue("white", "gray.800")

    const [open, setOpen] = useState(false)

    const [updatedProduct, setUpdatedProduct] = useState(product)

    const handleUpdateProduct = async(id, updatedProduct) => {
        const {sucess, message} = await updateProduct(id, updatedProduct)
        setOpen(!open)

        if(!sucess){
            toaster.create({
                title: "Error",
                type: "error",
                description: message,
                duration: 3000,
                closable: true
            })
        }else{
            toaster.create({
                title: "Sucess",
                type: "success",
                description: "Product update Sucessfully",
                duration:3000,
                closable: true
            })
        }
    }
    
    const handleDeleteProduct = async (id) => {

        const { sucess, message } = await deleteProduct(id)

        if (!sucess) {
            toaster.create({
                title: "Error",
                type: "error",
                description: message,
                duration: 3000,
                closable: true

            })
        } else {
            toaster.create({
                title: "Sucess",
                type: "success",
                description: message,
                duration: 3000,
                closable: true

            })
        }
    }

    return (
        <Box shadow={"lg"} rounded={"lg"}
            overflow={"hidden"} transition={"all 0.3s"}
            _hover={{ transform: "translateY(-5px)", shadow: "x1" }} bg={bg}>

            <Image src={product.image} alt={product.name} h={48} w={"full"} objectFit={"cover"} />

            <Box p={4} color={'black'}>
                <Heading as={"h3"} size={"md"} mb={2}>
                    {product.name}
                </Heading>

                <Text fontWeight={"bold"} fontSize={"xl"} mb={4} color={textColor}>
                    ${product.price}
                </Text>

                <HStack spacing={2}>
                    <Dialog.Root lazyMount open={open} onOpenChange={(e) => setOpen(e.open)}>
                        <Dialog.Trigger asChild>
                            <Button bg={"blue.400"} color={"white"} size={"xl"}><FaEdit /></Button>
                        </Dialog.Trigger>

                        <Portal>
                            <Dialog.Backdrop />

                            <Dialog.Positioner>
                                <Dialog.Content>
                                    <Dialog.Header>
                                        <Dialog.Title>Update Product</Dialog.Title>
                                    </Dialog.Header>

                                    <Dialog.Body>
                                        <VStack>
                                            <Input
                                                placeholder="Product Name"
                                                name="name"
                                                value={updatedProduct.name}
                                                onChange={(e) => setUpdatedProduct({...updatedProduct, name: e.target.value})}
                                            />

                                            <Input
                                                placeholder="Product Price"
                                                name="price"
                                                value={updatedProduct.price}
                                                onChange={(e) => setUpdatedProduct({...updatedProduct, price: e.target.value})}
                                            />

                                            <Input
                                                placeholder="Image URL"
                                                name="image"
                                                value={updatedProduct.image}
                                                onChange={(e) => setUpdatedProduct({...updatedProduct, image: e.target.value})}
                                            
                                            />

                                        </VStack>

                                    </Dialog.Body>

                                    <Dialog.Footer>
                                        <Dialog.ActionTrigger asChild>
                                            <Button variant="outline" > Cancel</Button>
                                        </Dialog.ActionTrigger>

                                        <Button onClick={()=> handleUpdateProduct(updatedProduct._id, updatedProduct)}>Update</Button>
                                    </Dialog.Footer>

                                    <Dialog.CloseTrigger asChild>
                                        <CloseButton size="sm" />
                                    </Dialog.CloseTrigger>
                                </Dialog.Content>
                            </Dialog.Positioner>
                        </Portal>
                    </Dialog.Root>

                    <Button bg={"red.400"} color={"white"} size={"xl"} onClick={() => handleDeleteProduct(product._id)}><MdDeleteForever /></Button>
                </HStack>
            </Box>


        </Box>
    )
};

export const X = () => {
    return (<h1>Vai toma no cu</h1>)
}
