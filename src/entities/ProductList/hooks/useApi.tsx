import React, { useState } from "react"
import { AxiosResponse } from "axios"
import { baseRequest } from "../../../shared"
import { Product } from "../../../shared/types"


export const useProducts = () => {

    const [products, setProducts] = useState<Product[]>([])

    const fetchProducts = async () => {

        const products: AxiosResponse<Product[]> = await baseRequest("/products", {
            method: "get",
            params: {
                limit: 10
            }
        })

        setProducts(products.data)
    }

    return {
        products,
        fetchProducts
    }
}