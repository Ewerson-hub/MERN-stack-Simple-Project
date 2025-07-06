import {create} from "zustand"

export const userPoductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({products}),
    createProduct: async (newProduct) => {
        if(!newProduct.name || !newProduct.price || !newProduct.image){
            return {sucess: false, message:"Please fill in all fields"}
        }

        const res = await fetch("/api/products/", {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newProduct)
        })
        
    const data = await res.json();

    set((state) => ({products: [...state.products, data.data]}))

    return {sucess: true, message:"Product created sucessfully"}
    },

    fetchProducts: async () => {
        const res = await fetch("/api/products");

        const data = await res.json();
        set({products: data.data});
    },

    deleteProduct: async (id) => {
        
        const res = await fetch(`/api/products/${id}`, {
            method: "DELETE",
        })
        const data = await res.json();

        if(!data.sucess) return {sucess: false, message: "Failed on delete a product"}

        set(state => ({products: state.products.filter(product => product._id !== id)}))
        return {sucess: true, message: data.message}
    },

    updateProduct: async (id, updateProduct) => {
        
        const res = await fetch(`/api/products/${id}`, {
            method: "PUT",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(updateProduct)
        })

        const data = await res.json();

         if(!data.sucess) return {sucess: false, message: data.message}

         set(state => ({
            products: state.products.map(product => product._id === id? data.data: product)
         })
         )

         return {sucess: true, message: data.message}
    }
}))
